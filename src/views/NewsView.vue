<template>
  <div>
    <div v-for="n in news" v-bind:key="n">
      {{ n.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
    // news() {
    //   return this.$store.state.news;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>

</style>