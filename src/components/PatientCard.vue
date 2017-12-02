<template>
  <li class="card thumbnail bootsnipp-thumb row">

    <div class="form-group col-lg-2 col-sm-4 col-md-4 col-xs-6">
      <label for="gender">Sexo</label><br>
      <input type="radio" name="gender" id="gender" v-model="value.sexo" value="M"> Masculino
      <input type="radio" name="gender" v-model="value.sexo" value="F">Feminino
    </div>
    <div class="form-group col-lg-9 col-sm-7 col-md-7 col-xs-5">
      <label for="age">Idade</label><br>
      <input type="number" name="age" id="age" v-model="value.idade" placeholder="Idade">
    </div>
    <div class="col-lg-1 col-sm-1 col-md-1 col-xs-1">
      <button @click="$emit('remove')" class=" btn btn-danger remove">x</button>
    </div>
    <div class="row">
      <div class="form-group col-sm-12">
        <label for="complaints">Queixas</label><br>
        <textarea id="complaints" class="complaints" cols="80" rows="3" v-model="value.queixas"
                  placeholder="Queixas"></textarea>
      </div>
    </div>
    <label for="isMedic">
      <input type="checkbox" id="isMedic" v-model="isMedic">
      Emergência médica
    </label>
      <medic-care v-if="isMedic"></medic-care>
  </li>
</template>
<script>
  import NeedMedicalCare from './NeedMedicalCare'

  export default {
    components: {
      medicCare: NeedMedicalCare
    },
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        isMedic: false
      }
    },
    computed: {
      card: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('change', val)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .card {
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 3px 3px 12px 0px rgba(50, 50, 50, 0.3);
    -moz-box-shadow: 3px 3px 12px 0px rgba(50, 50, 50, 0.3);
    box-shadow: 3px 3px 12px 0px rgba(50, 50, 50, 0.3);
  }

  .remove {
    position: relative;
    top: 20px;
    right: 20px;
  }

  .complaints {
    width: 100%;
  }
</style>
