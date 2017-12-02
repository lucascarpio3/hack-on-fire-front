<template>
  <li class="card">
    <div>
      <label for="gender">Sexo</label>
      <input type="radio" name="gender" id="gender" v-model="value.sexo" value="M"> Masculino
      <input type="radio" name="gender" v-model="value.sexo" value="F">Feminino
    </div>
    <input type="number" name="age" v-model="value.idade" placeholder="Idade">
    <textarea name="complaints" id="complaints" cols="30" rows="10" v-model="value.queixas"
              placeholder="Queixas"></textarea>
    <button @click="$emit('remove')">x</button>
  </li>
</template>
<script>
  export default {
    props: {
      value: {
        type: Object,
        required: true
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
