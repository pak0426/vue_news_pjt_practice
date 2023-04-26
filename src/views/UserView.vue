<template>
  <UserProfile :info="userInfo"></UserProfile>
</template>

<script>
import UserProfile from "@/views/UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERINFO', userName);
  }
}
</script>

<style scoped>

</style>