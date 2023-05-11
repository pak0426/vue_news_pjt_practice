<template>
  <div>
<!--    <BarChart></BarChart>-->
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    LineChart,
    BarChart
  }
}
</script>

<style scoped>

</style>