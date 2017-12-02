<template>
  <div class="container"><br>
    <div class="jumbotron">
      <h4 class="card-title">CHAMADA</h4>
    </div>
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
          <v-select :options="municipiosToSelect" :value.sync="call.municipio_id"></v-select>
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
          <input type="text" class="form-control" v-model="call.bairro_id" placeholder="Bairro">
        </div>
      </div>
      <br>
      <div>
        <div>
          <label>Pacientes</label>
          <ul class="patients">
            <card v-for="(card,index) in cards" :key="index" :value="card"
                  @change="card => cards[index] = card"
                  @remove="cards.splice(index,1)"></card>
            <button @click="addCard" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>
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
    <pre>{{call}}{{municipios}}</pre>
  </div>
</template>
<script>
  import MaskedInput from 'vue-masked-input'
  import PatientCard from './PatientCard'
  import VSelect from 'vue-select'

  export default {
    components: {
      MaskedInput,
      Card: PatientCard,
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
          municipio_id: ''
        },
        municipios: [],
        bairros: [],
        result: [],
        cards: [],
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
      addCard () {
        this.cards.push({
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
        this.$http.post('http://321b2b14.ngrok.io/api/v1/chamadas', this.call).then(result => {
          console.log(result)
          console.log(this.call)
          this.result = result.body.data
          this.clearFields()
        }, result => {
          this.result = result
        })
      },
      methods: {
        addCard () {
          this.cards.push(
            {
              sexo: 'M',
              idade: 0,
              queixas: ''
            })
          this.$http.get('http://321b2b14.ngrok.io/api/v1/bairrospormunicipio/1/').then(result => {
            console.log(result)
            this.result = result.body.data
            this.clearFields()
          }, result => {
            this.result = result
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

  .card-title {
    text-align: center;
    width: 100%;
  }

  .jumbotron {
    background: #025aa5;
    color: #fff;
  }

  .btn_ocorrencia {
    text-align: center;
  }

  .patients {
    margin: 0 !important;
    padding: 0 !important;
  }

  .btn-primary {
    margin-left: 2%;
  }
</style>
