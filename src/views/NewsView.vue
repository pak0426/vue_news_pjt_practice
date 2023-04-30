<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('SET_LOADINGSTATUS', true);
    this.$store.dispatch('FETCH_NEWS');
    setTimeout(() =>
      this.$store.dispatch('SET_LOADINGSTATUS', false), 3000
    )
  }
}
</script>