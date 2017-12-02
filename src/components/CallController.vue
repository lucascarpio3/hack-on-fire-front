<template>
  <div class="container"><br>
    <div class="jumbotron">
      <h4 class="card-title">CHAMADA</h4>
    </div>
    <div class="from-grup">
      <div class="row">
        <div class="col-md-6 mb-4">
          <label>Solicitante</label>
          <input type="text" class="form-control" placeholder="Solicitante" v_molde="call.solicitante">
        </div>
        <div class="col-md-2 mb-4">
          <label>CEP</label>
          <masked-input class="form-control" placeholder="CEP" v_molde="call.cep" mask="11111-111"></masked-input>
        </div>
        <div class="col-md-4 mb-4">
          <label>Municipio</label>
          <input type="text" class="form-control" placeholder="Municipio" v_molde="call.municipio_id">
        </div>
      </div>
      <br>
      <div class="row">

        <div class="col-md-3 mb-4">
          <label>Telefone 1</label>
          <masked-input class="form-control" mask="(11) 1111-11111" v-model="call.telefone1"
                        placeholder="Telefone Principal"></masked-input>
        </div>
        <div class="col-md-3 mb-4">
          <label>Telefone 2</label>
          <masked-input class="form-control" mask="(11) 1111-11111" v-model="call.telefone2"
                        placeholder="Telefone Opcional"></masked-input>
        </div>
        <div class="col-md-4 mb-4">
          <label>Endereço</label>
          <input type="text" class="form-control" placeholder="Endereço" v_molde="call.endereco">
        </div>
        <div class="col-md-2 mb-4">
          <label>Número</label>
          <input type="text" class="form-control" placeholder="Número" v_molde="call.numero">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-6 mb-4">
          <label>Observação</label>
          <input type="text" class="form-control" placeholder="Observação" v_molde="call.queixa">
        </div>

        <div class="col-md-6 mb-4">
          <label>Bairro</label>
          <input type="text" class="form-control" v_model="call." placeholder="Bairro" v_molde="call.bairro">
        </div>
      </div>
      <br>
      <div>
        <div>
          Pacientes:
          <ul class="patients">
            <card v-for="(card,index) in cards" :key="index" :value="card"
                  @change="card => cards[index] = card"
                  @remove="cards.splice(index,1)"></card>
            <button @click="addCard">+</button>
          </ul>
        </div>
      </div>
      <div class="row btn_ocorrencia">
        <div class="col-md-12 mb-3">
          <button type="button" class="btn btn-primary">Cria Ocorrência</button>
        </div>
      </div>
      <br>
    </div>
  </div>


</template>
<script>
  import MaskedInput from 'vue-masked-input'
  import PatientCard from './PatientCard'

  export default {
    components: {
      MaskedInput,
      Card: PatientCard
    },
    data () {
      return {
        call: {
          solicitante: '',
          telefone1: '',
          telefone2: '',
          bairro: '',
          endereco: '',
          numero: ''

        },

        result: [],
        cards: [],
        payload: {}
      }
    },

    mounted () {
      console.log('teste')
      this.$http.post('http://321b2b14.ngrok.io/api/v1/bairros', this.call).then(result => {
        console.log(result)
        this.result = result.body.data
        if (!result.ok) {
          this.result = result
        }
      }, result => {
        this.result = result
      })
      this.$http.get('http://321b2b14.ngrok.io/api/v1/bairros').then(result => {
        console.log(result)
        this.result = result.body.data
        if (!result.ok) {
          this.result = result
        }
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
            queixas: 'test'
          })
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

</style>
