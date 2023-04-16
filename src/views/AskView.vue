<template>
  <div v-for="ask in asks" v-bind:key="ask">
    {{ ask }}
  </div>
</template>

<script>
import {fetchAsksList} from '../api/index'

export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchAsksList()
        .then(response => {
          console.log('response', response);
          this.asks = response
        })
        .catch(error => {
          console.log('error', error);
        })
  }
}
</script>

<style scoped>

</style>