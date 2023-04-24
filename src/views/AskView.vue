<template>
  <div>
    <ul class="ask-list">
      <li class="post" v-for="ask in this.$store.state.asks" v-bind:key="ask">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
          </p>
          <small class="ask-text">
            {{ ask.time_ago}} by {{ ask.user }}
          </small>
        </div>
      </li>
    </ul>
  </div>
<!--  <p v-for="ask in this.$store.state.asks" v-bind:key="ask">-->
<!--    <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>-->
<!--    <small>{{ ask.time_ago}} by {{ ask.user }}</small>-->
<!--  </p>-->
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}

.post {
  align-items: center;
  display: flex;
  list-style: none;
  border-bottom: solid 1px #eee;
}
.points {
  color: #42B883;
  justify-content: center;
  height: 60px;
  width: 80px;
  display: flex;
  align-items: center;
}
.ask-title {
  margin: 0;
  padding: 0;
}
.ask-text {
  color: #828282;
}
</style>