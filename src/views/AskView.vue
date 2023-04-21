<template>
  <p v-for="ask in this.$store.state.asks" v-bind:key="ask">
    <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
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