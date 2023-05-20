<template>
  <div class="chartTitle">
    <h3>Please Select Chart</h3>
    <select v-model="pick" class="selectChart">
      <option value="barChart">Bar Chart</option>
      <option value="lineChart">Line Chart</option>
      <option value="polarChart">Polar Area Chart</option>
      <option value="radarChart">Radar Chart</option>
    </select>
  </div>
  <div>
    <template v-if="this.pick == 'barChart'">
      <BarChart></BarChart>
    </template>
    <template v-if="this.pick == 'lineChart'">
      <LineChart></LineChart>
    </template>
    <template v-if="this.pick == 'polarChart'">
      <PolarAreaChart></PolarAreaChart>
    </template>
    <template v-if="this.pick == 'radarChart'">
      <RadarChart></RadarChart>
    </template>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import PolarAreaChart from "@/components/PolarAreaChart.vue";
import RadarChart from "@/components/RadarChart.vue";

export default {
  components: {
    RadarChart,
    LineChart,
    BarChart,
    PolarAreaChart
  },
  data() {
    return {
      pick : 'barChart'
    }
  }
}
</script>

<style scoped>
.chartTitle {
  display: flex;
  align-items: center;
  gap: 13px;
}

.selectChart {
  padding: 10px 5px;
  border: 2px solid green;

}
</style>