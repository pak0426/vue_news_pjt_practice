<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {ToolBar}
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
