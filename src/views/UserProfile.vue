<template>
    <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
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
.user-container {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 10px;
  font-size: 20px;
}
.time {
  font-size: 1.0rem;
}
</style>