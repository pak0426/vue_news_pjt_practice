<template>
  <div>
    <section>
      <UserProfile :info="getInfoItem">
        <template v-slot:username>
          <router-link :to="`/user/${getInfoItem.user}`">
            {{ getInfoItem.user }}
          </router-link>
        </template>
        <template v-slot:time>
          {{ 'Posted ' + getInfoItem.time_ago }}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ getInfoItem.title }}</h2>
    </section>
    <section>
      <div v-html="getInfoItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "@/views/UserProfile.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['getInfoItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMINFO', itemId)
  }
}
</script>