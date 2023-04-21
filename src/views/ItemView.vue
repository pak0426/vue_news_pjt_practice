<template>
  <div>
    <p>{{ this.$store.state.item.title }}</p>
    <p>{{ this.$store.state.item.content }}</p>
  </div>
</template>

<script>
  export default {
    computed() {
    },
    created() {
      const itemId = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEMINFO', itemId)
    }
  }
</script>

<style scoped>

</style>