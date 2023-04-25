<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem
  }
}
</script>

<style scoped>
.jobs-list {
  margin: 0;
  padding: 0;
}
.post {
  align-items: center;
  display: flex;
  list-style: none;
  border-bottom: solid 1px #eee;
}
.points {
  color: #42B883;
  justify-content: center;
  height: 60px;
  width: 80px;
  display: flex;
  align-items: center;
}
.job-title {
  margin: 0;
  padding: 0;
}
.job-text {
  color: #828282
}
</style>