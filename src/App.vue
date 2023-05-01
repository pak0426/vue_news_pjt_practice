<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Spinner :loading="this.$store.state.loadingStatus"></Spinner>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ToolBar from '@/components/ToolBar.vue'
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  components: {
    ToolBar,
    Spinner
  },
})
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color:#42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
