<template>
  <p v-for="ask in this.$store.state.asks" v-bind:key="ask">
    <a :href="ask.url">{{ ask.title }}</a>
    <small>{{ ask.time_ago}} by {{ ask.user }}</small>
  </p>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>

</style>