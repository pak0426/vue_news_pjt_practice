<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from "@/mixins/ListMixin";
import store from "@/store";
import EndSpinnerMixin from "@/mixins/EndSpinnerMixin";

export default {
  components: {
    ListItem
  },
  mixins: [EndSpinnerMixin]
  // mixins: [ListMixin]
}
</script>