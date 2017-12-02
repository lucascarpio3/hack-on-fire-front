<template>
  <div>
    {{name}}
    <ul>
      <li v-for="(index,card) in cards">
        <input :type="modelDefinition[def].type" v-for="def in keys" :placeholder="modelDefinition[def].placeholder"
               v-model="card[def].value">
        <button @click="removeCard">x</button>
      </li>
      <button @click="addCard">+</button>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      cards: {
        type: Array,
        required: true
      },
      modelDefinition: {
        type: Object,
        required: true
      }
    },
    computed: {
      keys () {
        return Object.keys(this.modelDefinition)
      }
    },
    data () {
      return {
        name: ''
      }
    },
    methods: {
      removeCard (index) {
        this.cards.splice(index, 1)
      },
      addCard () {
        this.$emit('addCard')
      }
    }
  }
</script>
