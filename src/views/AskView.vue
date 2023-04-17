<template>
  <div v-for="ask in this.$store.state.asks" v-bind:key="ask">
    {{ ask }}
  </div>
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