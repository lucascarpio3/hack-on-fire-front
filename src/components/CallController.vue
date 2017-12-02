<template>
  <div class="form">
    <input class="inp" type="text" v-model="call.requester" placeholder="Solicitante">
    <input class="inp" type="text" v-model="call.telephone" placeholder="Telefone">
    <input class="inp" type="text" v-model="call.city" placeholder="Municipio">
    <input class="inp" type="text" v-model="call.address" placeholder="Endereço">
    <input class="inp" type="text" v-model="call.number" placeholder="Número">
    <input class="inp" type="text" v-model="call.neighborhood" placeholder="Bairro">
    <input class="inp" type="text" v-model="call.reference" placeholder="Referênce">
    <input class="inp" type="text" v-model="call.patient" placeholder="Paciente">
    <input class="inp" type="text" v-model="call.sex" placeholder="Sexo">
    <input class="inp" type="text" v-model="call.age" placeholder="Idade">
    <input class="inp" type="text" v-model="call.complaint" placeholder="Queixa da paciente">
    <input class="inp" type="text" v-model="call.comments" placeholder="Observações">
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
<style lang="scss" scoped>

</style>
