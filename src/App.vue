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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
