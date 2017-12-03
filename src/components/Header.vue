<template>
  <div class="container">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="#/call"><IMG SRC="static/logo.jpeg" height="50px"/></a>
          </div>

          <a class="navbar-brand" href="#">Chamada</a>

          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">

            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><a href="#/call"><i class="fa fa-volume-control-phone" aria-hidden="true"></i> Chamada</a></li>
              <li><router-link :to="{ path: '/header'}" replace><i class="fa fa-plane" aria-hidden="true"></i> Despacho</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
      name: 'Header'
    }
</script>

<style scoped>

</style>
