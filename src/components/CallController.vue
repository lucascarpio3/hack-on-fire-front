<template>
  <div id="container">
    <div id="top">
      <div id="locationData">
        <input type="text" v-model="call.cep" placeholder="CEP">
        <input type="text" v-model="call.telephone" placeholder="Telefone">
        <input type="text" v-model="call.city" placeholder="Cidade">
        <input type="text" v-model="call.adress" placeholder="Endereço">
        <input type="text" v-model="call.number" placeholder="Número">
        <input type="text" v-model="call.neighborhood" placeholder="Bairro">
      </div>
      <div id="personData">
        <input type="text" v-model="call.requester" placeholder="Solicitante">
        <input type="text" v-model="call.pacient" placeholder="Paciente">
        <input type="text" v-model="call.gender" placeholder="Sexo">
        <input type="text" v-model="call.age" placeholder="Idade">
        <input type="text" v-model="call.complaint" placeholder="Queixa do paciente">

      </div>

    </div>
    <div>
      <input type="text" v-model="call.description" placeholder="Descrição da Ocorrência">
    </div>
    <div>

    </div>


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

  #container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-grow: 1;
    input {
      margin: 4%;
    }
  }

  #top {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-around;
  }

  #personData {
    display: flex;
    flex-direction: column;
    width: 40%;

  }

  #locationData {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  input {
    padding: 12px;
    font-size: 12pt;
    border: 1px solid #999;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    width: 100%;
  }
</style>
