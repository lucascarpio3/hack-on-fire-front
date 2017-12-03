<template>
  <div>
    <hk-header></hk-header>

    <div class="linha row">
      <div class="col-xs-8"><i class="fa fa-phone" aria-hidden="true"></i> Chamadas</div>
      <div class="col-xs-4"><i class="fa fa-truck" aria-hidden="true"></i> Recursos</div>
    </div>
    <br>
    <div class="row">
      <div class="panel-group col-xs-8">
        <div class="panel panel-primary" v-for="call in chamadas">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">Status: Em Andamento</a>
            </h4>
          </div>

          <div id="collapse1" class="panel-collapse collapse">
            <div class="panel-body">
              <div class="from-grup">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label>Solicitante</label>
                    <input type="text" class="form-control" placeholder="Solicitante" v-model="call.solicitante">
                  </div>
                  <div class="col-md-2 mb-4">
                    <label>CEP</label>
                    <masked-input class="form-control" placeholder="CEP" v-model="call.cep"
                                  mask="11111-111"></masked-input>
                  </div>
                  <div class="col-md-4 mb-4">
                    <label>Municipio</label>
                    <v-select :options="municipiosToSelect" v-model="call.municipio_id"></v-select>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-3 mb-4">
                    <label>Telefone 1</label>
                    <masked-input class="form-control" mask="(11) 11111-1111" v-model="call.telefone1"
                                  placeholder="Telefone Principal"></masked-input>
                  </div>
                  <div class="col-md-3 mb-4">
                    <label>Telefone 2</label>
                    <masked-input class="form-control" mask="(11) 11111-1111" v-model="call.telefone2"
                                  placeholder="Telefone Opcional"></masked-input>
                  </div>
                  <div class="col-md-4 mb-4">
                    <label>Endereço</label>
                    <input type="text" class="form-control" placeholder="Endereço" v-model="call.endereco">
                  </div>
                  <div class="col-md-2 mb-4">
                    <label>Número</label>
                    <input type="text" class="form-control" placeholder="Número" v-model="call.numero">
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label>Observação</label>
                    <input type="text" class="form-control" placeholder="Observação" v-model="call.observacao">
                  </div>

                  <div class="col-md-6 mb-4">
                    <label>Bairro</label>
                    <v-select :options="bairros" v-model="call.bairro_id"></v-select>
                  </div>
                </div>
                <br>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label>Prioridade da Chamada</label><br>
                    <input type="radio" name="gender" v-model="call.prioridade" value="baixo"> Baixo
                    <input type="radio" name="gender" v-model="call.prioridade" value="medio"> Medio
                    <input type="radio" name="gender" v-model="call.prioridade" value="alto"> Alto
                  </div>
                </div>
                <br>
                <div>
                  <label>Pacientes</label>
                  <ul class="patients">
                    <card v-for="(card,index) in call.pacientes" :key="index" :value="card"
                          @change="card => call.pacientes[index] = card"
                          @remove="call.pacientes.splice(index,1)"></card>
                    <button @click="addCard" class="btn btn-primary">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </ul>
                </div>
                <div>
                  <label>Recursos</label>
                  <v-select multiple :options="recursosToSelect"></v-select>
                </div>
              </div>
              <div class="panel-footer">
                <button type="button" class="btn btn-primary">Editar</button>
                <button type="button" class="btn btn-success">Encaminhar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-4">
        <ul class="recursos">
          <li v-for="rec in recursos" :class="['card', 'thumbnail', 'bootsnipp-thumb', 'row',
            {disponivel:rec.status_id === 1},
            {indisponivel:rec.status_id === 0},
            {'em-rota':rec.status_id === 2},
            {'em-atendimento':rec.status_id === 3}]">
            <div class="col-xs-6">{{rec.codigo}}</div>
            <div class="col-xs-6"><b>{{rec.status}}</b></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import PatientCard from './PatientCard'
  import Header from './Header'
  import VSelect from 'vue-select'

  export default {
    name: 'Release',
    components: {
      HkHeader: Header,
      MaskedInput,
      Card: PatientCard,
      VSelect
    },
    computed: {
      municipiosToSelect () {
        return this.municipios.map(item => ({label: item.nome, value: item.id}))
      },
      recursosToSelect () {
        return this.recursos.filter(item => item.status_id === 1).map(item => ({label: item.codigo}))
      }
    },
    data () {
      return {
        chamadas: [],
        call: {
          solicitante: '',
          telefone1: '',
          telefone2: '',
          bairro_id: '',
          endereco: '',
          numero: '',
          observacao: '',
          municipio_id: '',
          pacientes: []
        },
        municipios: [],
        bairros: [],
        recursos: [
          {
            codigo: 'A-554450',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554451',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554452',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554454',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554456',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554450',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554451',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554452',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554454',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554456',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554457',
            status: 'Disponível',
            status_id: 1
          }, {
            codigo: 'A-554455',
            status: 'Em rota',
            status_id: 2
          }, {
            codigo: 'A-554453',
            status: 'Em atendimento',
            status_id: 3
          }, {
            codigo: 'A-554457',
            status: 'Indisponível',
            status_id: 0
          }
        ]
      }
    },
    mounted () {
      this.$http.get('http://321b2b14.ngrok.io/api/v1/chamadas').then(result => {
        console.log('aaaaaaa', result)
        this.chamadas = result.body.data
      })
    },
    methods: {
      treatValue (value) {
        return Object.assign({}, value, {
          municipio_id: value.municipio_id.value,
          bairro_id: value.bairro_id.value
        })
      },
      addCard () {
        this.call.pacientes.push(
          {
            genero: 'masculino',
            idade: 0,
            queixas: ''
          })
      },
      clearFields () {
        for (const key in Object.keys(this.call)) {
          this.call[key] = ''
        }
      },
      sendCall () {
        console.log(this.treatValue(this.call))
        this.$http.post('http://321b2b14.ngrok.io/api/v1/chamadas', this.treatValue(this.call)).then(result => {
          this.result = result.body.data

          this.clearFields()
        }, result => {
          this.result = result
        })
      }
    },
    watch: {
      'call.municipio_id': function (val) {
        this.$http.get(`http://321b2b14.ngrok.io/api/v1/bairrospormunicipio/${val.value}/`).then(result => {
          this.bairros = result.body.data.map(item => ({label: item.nome, value: item.id}))
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recursos {
    padding: 0;
    margin: 0;
    overflow-y: auto;
    position: fixed;
    right: 0;
    width: 33%;
    max-height: 500px;
  }

  .card {
    margin: -1px;
    padding: 10px;
    font-size: 13pt;

    &.indisponivel {
      background: #FFC4D0;
    }
    &.em-rota {
      background: #A9E5FD;
    }
    &.em-atendimento {
      background: #FDFFC1;
    }
    &.disponivel {
      background: #BFECC8;
    }

  }
</style>
