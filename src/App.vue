<template>
  <ToolBar></ToolBar>
  <router-view></router-view>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {ToolBar}
})


</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
