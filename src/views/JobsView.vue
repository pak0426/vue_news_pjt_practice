<template>
  <div>
    <ul class="jobs-list">
      <li v-for="job in fetchedJobs" v-bind:key="job" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="job-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="job-text">
            {{ job.time_ago }}
            <a :href="job.url" v-if="job.domain !== undefined">
              by {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['fetchedJobs'])
    // ...mapGetters({
    //   jobitems: 'fetchedJobs'
    // }),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
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