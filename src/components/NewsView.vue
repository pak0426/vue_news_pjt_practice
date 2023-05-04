<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from "@/mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin]
}
</script>