<template>
  <div v-for="job in jobs" v-bind:key="job">
    {{ job }}
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchJobsList()
        .then(response => {
          console.log('response', response);
          this.jobs = response;
        })
        .catch(error => {
          console.log('error', error);
        })
  }
}
</script>

<style scoped>

</style>