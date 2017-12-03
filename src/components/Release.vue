<template>
  <div class="container">
    <hk-header></hk-header>

    <div class="linha">
      <i class="fa fa-users" aria-hidden="true"></i> Chamadas
    </div><br>

    <div class="panel-group">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">Status: Em Andamento</a>
          </h4>
        </div>

        <div id="collapse1" class="panel-collapse collapse">
          <div class="panel-body">
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
              </div><br>

              <label>Pacientes</label>
              <ul class="patients">
                <card v-for="(card,index) in cards" :key="index" :value="card"
                      @change="card => cards[index] = card"
                      @remove="cards.splice(index,1)"></card>
                <button @click="addCard" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>
              </ul>
            </div>

            <div class="panel-footer">
              <button type="button" class="btn btn-primary">Editar</button>
              <button type="button" class="btn btn-success">Encaminhar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'

  export default {
    name: 'release.vue',
    components: {
      HkHeader: Header
    }
  }
</script>

<style scoped>

</style>
