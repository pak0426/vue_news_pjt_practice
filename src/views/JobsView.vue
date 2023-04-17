<template>
  <div v-for="job in fetchedJobs" v-bind:key="job">
    {{ job }}
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['fetchedJobs'])
    // ...mapGetters({
    //   jobitems: 'fetchedJobs'
    // }),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>