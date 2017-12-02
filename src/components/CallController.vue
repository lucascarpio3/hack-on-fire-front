<template>
  <div>
    <input type="text" v-model="call.cep" placeholder="CEP">
    <input type="text" v-model="call.telephone" placeholder="Telefone">
    <input type="text" v-model="call.city" placeholder="Cidade">
    <input type="text" v-model="call.adress" placeholder="Endereço">
    <input type="text" v-model="call.number" placeholder="Número">
    <input type="text" v-model="call.neighborhood" placeholder="Bairro">


    <input type="text" v-model="call.requester" placeholder="Solicitante">

    <input type="text" v-model="call.pacient" placeholder="Paciente">
    <input type="text" v-model="call.gender" placeholder="Sexo">
    <input type="text" v-model="call.age" placeholder="Idade">
    <input type="text" v-model="call.requester" placeholder="Solicitante">
    <input type="text" v-model="call.requester" placeholder="Solicitante">
    <input type="text" v-model="call.requester" placeholder="Solicitante">
    <input type="text" v-model="call.requester" placeholder="Solicitante">
    <input type="text" v-model="call.requester" placeholder="Solicitante">
    <input type="text" v-model="call.requester" placeholder="Solicitante">



  </div>
</template>
<script>
  export default {
    data () {
      return {
        call: {
          requester: ''
        }
      }
    }
  }
</script>
<style scoped >

</style>
