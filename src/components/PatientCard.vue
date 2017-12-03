<template>
  <li class="card thumbnail bootsnipp-thumb row">
    <div class="row">
      <div class="form-group col-lg-5 col-sm-5 col-md-5 col-xs-4">
        <label for="gender">Sexo</label><br>
        <input type="radio" name="gender" id="gender" v-model="card.sexo" value="M"> Masculino
        <input type="radio" name="gender" v-model="card.sexo" value="F"> Feminino
      </div>
      <div class="form-group col-lg-2 col-sm-5 col-md-5 col-xs-5">
        <label for="age">Idade</label><br>
        <input type="number" class="form-control" name="age" id="age" v-model="card.idade" placeholder="Idade">
      </div>
      <div class="col-lg-5 col-sm-2 col-md-2 col-xs-3">
        <button @click="$emit('remove')" class=" btn btn-danger remove">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-12">
        <label for="complaints">Queixas</label><br>
        <textarea id="complaints" class="form-control" cols="80" rows="3" v-model="card.queixas"
                  placeholder="Queixas"></textarea>
      </div>
    </div>
    <label for="isMedic">
      <input type="checkbox" id="isMedic" v-model="isMedic">
      Emergência médica
    </label>
    <medic-care v-if="isMedic" :entity="card" @change=""></medic-care>
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
    },
    watch: {
      'value.idade': function (val) {
        if (this.value.idade <= 0) {
          this.value.idade = 1
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

  .btn-danger {
    position: absolute;
    top: 0;
  }
</style>
