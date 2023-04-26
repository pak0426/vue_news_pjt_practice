<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItem" v-bind:key="item" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <tempate v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </tempate>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            <router-link
                v-if="item.user"
                :to="`/user/${item.user}`" class="link-text">by {{ item.user }}</router-link>
            <a
                v-if="!item.user && item.domain"
                :href="item.url">
              by {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    let fetchName;
    if(name === 'news') fetchName = 'FETCH_NEWS';
    else if(name === 'asks') fetchName = 'FETCH_ASKS';
    else if(name === 'jobs') fetchName = 'FETCH_JOBS';

    this.$store.dispatch(fetchName);
  },
  computed: {
    listItem() {
      const name = this.$route.name;
      let listItem;
      if(name === 'news') listItem = this.$store.state.news;
      else if(name === 'asks') listItem = this.$store.state.asks;
      else if(name === 'jobs') listItem = this.$store.state.jobs;
      return listItem;
    }
  },
  data() {
    return {

    }
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