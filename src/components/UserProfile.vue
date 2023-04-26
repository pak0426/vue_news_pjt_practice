<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <div v-if="getInfoItem.user">
            {{ getInfoItem.id }}
          </div>
          <router-link
              v-else
              :to="`/user/${getInfoItem.user}`">
            {{ getInfoItem.id }}
          </router-link>
          <div class="time">
            {{ getInfoItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ getInfoItem.title }}</h2>
    </section>
    <section>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getInfoItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMINFO', itemId)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 10px;
}
.time {
  font-size: 0.7rem;
}
</style>