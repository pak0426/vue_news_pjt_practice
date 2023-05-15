<template>
  <div style="height: 2000px">
    <BarChart></BarChart>
    <LineChart></LineChart>
    <PolarAreaChart></PolarAreaChart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import PolarAreaChart from "@/components/PolarAreaChart.vue";

export default {
  components: {
    LineChart,
    BarChart,
    PolarAreaChart
  }
}
</script>

<style scoped>

</style>