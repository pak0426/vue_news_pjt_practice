<template>
  <div>
    <p v-for="item in news" v-bind:key="item">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
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