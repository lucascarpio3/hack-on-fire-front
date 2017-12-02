<template>
  <div>
    <list-cards name="Pacientes" :cards="cards" :modelDefinition="cardModel" @addCard="addCard"></list-cards>
  </div>
</template>
<script>
  import ListCards from './ListCard'

  export default {
    components: {
      ListCards
    },
    data () {
      return {
        result: [],
        cards: [],
        cardModel: {
          sexo: {
            type: 'text',
            placeholder: 'Sexo',
            value: ''
          },
          idade: {
            type: 'number',
            placeholder: 'Idade'
          }
        }
      }
    },
    mounted () {
      console.log('teste')
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
        this.cards.push({sexo: 'M', idade: 0})
      }
    }
  }
</script>
