<template>
  <div class="container">
    <hk-header></hk-header>

    <!--div class="jumbotron">
      <h4 class="card-title">CHAMADA</h4>
    </div-->
    <div class="from-grup">
      <div class="row">
        <div class="col-md-6 mb-4">
          <label>Solicitante</label>
          <input type="text" class="form-control" placeholder="Solicitante" v-model="call.solicitante">
        </div>
        <div class="col-md-2 mb-4">
          <label>CEP</label>
          <masked-input class="form-control" placeholder="CEP" v-model="call.cep" mask="11111-111"></masked-input>
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
          <input type="radio" name="gender" v-model="call.prioridade" value="M"> Baixo
          <input type="radio" name="gender" v-model="call.prioridade" value="F"> Medio
          <input type="radio" name="gender" v-model="call.prioridade" value="F"> Alto
        </div>
      </div><br>


      <div>
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
      </div>
      <div class="row btn_ocorrencia">
        <div class="col-md-12 mb-3">
          <button type="button" class="btn btn-success" @click="sendCall">Cria Ocorrência</button>
        </div>
      </div>
      <br>
    </div>

  </div>
</template>
<script>
  import MaskedInput from 'vue-masked-input'
  import PatientCard from './PatientCard'
  import Header from './Header'
  import VSelect from 'vue-select'

  export default {
    components: {
      MaskedInput,
      Card: PatientCard,
      HkHeader: Header,
      VSelect
    },
    data () {
      return {
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
        result: [],
        payload: {}
      }
    },
    mounted () {
      this.$http.get('http://321b2b14.ngrok.io/api/v1/municipios').then(result => {
        this.municipios = result.body.data
      })
    },
    computed: {
      municipiosToSelect () {
        return this.municipios.map(item => ({label: item.nome, value: item.id}))
      }
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
            sexo: 'M',
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

</style>
