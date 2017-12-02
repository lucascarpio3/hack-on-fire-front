<template>
  <div class="form">
    <input class="inp" type="text" v-model="call.requester">
    {{call.requester}}
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

</style>
