<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/asks">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/chart">Chart</router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
.header {
  color: white;
  background: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>