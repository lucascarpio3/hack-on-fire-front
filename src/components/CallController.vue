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
      <input type="text" v-model="call.description" placeholder="Descrição da Ocorrência">
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

  #container{
    display:flex;
    justify-content:space-around;

    input{
      margin:4%;
    }
  }
  #top{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
  #personData{
    display:flex;
    flex-direction:column;

  }

  #locationData{
    display:flex;
    flex-direction:column;
  }
</style>
