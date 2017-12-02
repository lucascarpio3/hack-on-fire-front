<template>
  <div class="row">
    <div class="col-sm-3">
      <input type="text" @keyup="searchHurtType" v-model="searchTerm" @keyup.enter="selectFirst" @focus="">
      <ul v-if="searchTerm.length > 0">
        <li v-for="hType in hurtTypeFiltred ">{{hType}}</li>
      </ul>
    </div>

    <div class="col-sm-9">
      <div class="configs" v-for="key in keys">
        <input type="text" v-if="configDataHurts[key].type === 'text'">
      </div>
      <ul class="hurts-selecteds">
        <li v-if="hurtSelecteds.length >= 1 ">{{hurtSelecteds}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {removeDiacritics} from '../utils/tools.js'

  export default {
    name: 'needMedicalCare',
    props: {
      entity: {
        type: Object,
        required: true
      }
    },
    computed: {
      hurtTypeFiltred () {
        return this.hurtTypes.filter(this.removeSelected).filter(this.filterByTerm)
      },
      keys () {
        return Object.keys(this.configDataHurts)
      }
    },
    methods: {
      searchHurtType (val) {

      },
      filterByTerm (value) {
        return removeDiacritics(value).toUpperCase().indexOf(removeDiacritics(this.searchTerm).toUpperCase()) >= 0
      },
      removeSelected (hurtType) {
        return this.hurtSelecteds.indexOf(hurtType) < 0
      },
      selectFirst () {
        if (this.searchTerm.length > 0) {
          if (this.hurtCurrent) {
            this.hurtSelecteds.unshift(this.hurtCurrent)
          }
          this.hurtCurrent = this.hurtTypeFiltred[0]
        }
      }
    },
    data () {
      return {
        hurtSelecteds: [],
        hurtCurrent: null,
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

        ],
        configDataHurts: {
          'Hemorragia': {
            type: 'radio',
            values: ['interna', 'externa']
          }
        }

      }
    }
  }
</script>
<style scoped>
</style>
