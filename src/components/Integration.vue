<template>
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
</template>
<script>
  import PatientCard from './PatientCard'

  export default {
    components: {
      Card: PatientCard
    },
    data () {
      return {
        result: [],
        cards: [
          {
            sexo: 'F',
            idade: 18,
            queixas: 'Dores fortes nos ombros.'
          }
        ]
      }
    },
    mounted () {
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
  .patients {
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
