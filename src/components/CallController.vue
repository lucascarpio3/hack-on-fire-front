<template>
  <div>
    <input type="text" v-model="call.requester">
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
<style scoped >

</style>
