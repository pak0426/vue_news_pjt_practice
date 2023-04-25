<template>
  <div>
    <ul class="news-list">
      <li v-for="item in news" v-bind:key="item" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display :flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-list {
  margin: 0;
  padding: 0;
}
.news-title {
  margin: 0;
  padding: 0;
}
.link-text {
  color: #828282;
}
</style>