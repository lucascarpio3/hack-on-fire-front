<template>
  <div class="row">
    <div class="col-md-3">
      <input type="text" @keyup="searchHurtType" v-model="searchTerm" @keyup.enter="selectFirst">
        <ul v-if="searchTerm.length > 0">
          <li v-for="hType in hurtTypeFiltred ">{{hType}}</li>
        </ul>
    </div>

    <div class="col-md-9">


    </div>
  </div>
</template>

<script>
  import { removeDiacritics } from '../utils/tools.js'
  export default {
      name: 'needMedicalCare',
      computed: {
        hurtTypeFiltred: function () {
          return this.hurtTypes.filter(value => removeDiacritics(value).toUpperCase().indexOf(removeDiacritics(this.searchTerm).toUpperCase()) >= 0)
        }
      },
      methods: {
        searchHurtType (val) {

        },
        selectFirst () {
          this.hurtSelected = this.hurtTypeFiltred[0]

        }

      },
      data () {
        return {
          hurtSelected: null,
          searchTerm: '',
          hurtTypes: [
            'Hemorragia',
            'Estado de Choque',
            'Sindrome Coronariana',
            'Trauma de Extremidade',
            'Trauma Abdominal',
            'Trauma Cranio Encefalico',
            'Traumatismo Raquimedular',
            'Trauma Toracico',
            'Lesao Termica'

          ]

        }
      }

    }
</script>

<style scoped>

</style>
