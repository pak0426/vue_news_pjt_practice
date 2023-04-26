<template>
  <div>
    <p>name: {{ info.id }}</p>
    <p>karma: {{ info.karma }}</p>
    <p>created: {{ info.created }}</p>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style scoped>

</style>