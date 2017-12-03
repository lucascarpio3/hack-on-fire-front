<template>
  <div class="row">
    <div class="col-sm-3">
      <input type="text" @keyup="searchHurtType" class="form-control" v-model="searchTerm" @keyup.enter="selectFirst"
             @focus="">
      <ul v-if="searchTerm.length > 0">
        <li v-for="hType in hurtTypeFiltred ">{{hType.descricao}}</li>
      </ul>
    </div>

    <div class="col-sm-7">
      <div class="configs" v-for="key in keys" v-if="keys">
        <input class="form-control" type="text" v-if="configDataHurts[hurtCurrent.descricao][key].type === 'text'"
               v-model="patientMedicalCare[hurtCurrent.descricao][key]" :placeholder="key">
        <label v-for="val in configDataHurts[hurtCurrent.descricao][key].values"
               v-else-if="configDataHurts[hurtCurrent.descricao][key].type === 'radio'">
          <input class="tipo" type="radio" v-model="patientMedicalCare[hurtCurrent.descricao][key]" :placeholder="key"
                  :value="val">
          {{val}}
        </label>
      </div>


      <ul class="hurts-selecteds">
        <li v-if="hurtSelecteds.length >= 1 ">{{hurtSelecteds}}</li>
      </ul>
    </div>
    <button class="fa fa-plus btn btn-primary"></button>
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
    mounted () {
      this.$http.get('http://321b2b14.ngrok.io/api/v1/emergencias').then(result => {
        this.hurtTypes = result.body.data
      }, result => {
        this.result = result
      })
    },
    computed: {
      hurtTypeFiltred () {
        return this.hurtTypes.filter(this.removeSelected).filter(this.filterByTerm)
      },
      keys () {
        console.log('***', (this.hurtCurrent && Object.keys(this.configDataHurts[this.hurtCurrent.descricao])) || null)
        return (this.hurtCurrent && Object.keys(this.configDataHurts[this.hurtCurrent.descricao])) || null
      },
      patientMedicalCare: {
        get () {
          return this.entity
        },
        set (value) {
          this.$emit('change', {entity: this.hurtCurrent, value})
        }
      }
    },
    methods: {
      filterByTerm (value) {
        return removeDiacritics(value.descricao).toUpperCase().indexOf(removeDiacritics(this.searchTerm).toUpperCase()) >= 0
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
          this.searchTerm = this.hurtTypeFiltred[0].descricao
        }
      },
      searchHurtType () {
        return this.hurtTypes
      }
    },
    data () {
      return {
        hurtSelecteds: [],
        hurtCurrent: null,
        searchTerm: '',
        hurtTypes: [],
        configDataHurts: {
          'Hemorragia': {
            'Tipo': {
              type: 'radio',
              values: ['interna', 'externa']
            },
            'Observação': {
              type: 'text'
            }
          },
          'Estado de Choque': {
            'Sintomas': {
              type: 'text'
            }
          }
        }
      }
    },
    watch: {
      hurtCurrent (val) {
        this.$set(this.patientMedicalCare, val.descricao, {})
      }
    }
  }
</script>
<style scoped>
</style>
