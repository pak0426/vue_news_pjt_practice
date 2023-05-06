<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from "@/mixins/ListMixin";
import EndSpinnerMixin from "@/mixins/EndSpinnerMixin";
import store from "@/store";

export default {
  components: {
    ListItem,
  },
  mixins: [EndSpinnerMixin]
  // mixins: [ListMixin]
}
</script>