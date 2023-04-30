<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem
  },
  created() {
    this.$store.dispatch('SET_LOADINGSTATUS', true)
        .then(() => {
          this.$store.dispatch('FETCH_JOBS')
              .then(() => {
                setTimeout(() =>
                    this.$store.dispatch('SET_LOADINGSTATUS', false), 300
                )
              })
        })
  }
}
</script>