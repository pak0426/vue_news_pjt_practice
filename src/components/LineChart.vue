<template>
  <div>
    <canvas ref="lineChart" id="lineChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  data() {
    return {
      data: {
        DATA_COUNT: 7,
        NUMBER_CFG: {
          count: this.DATA_COUNT,
          min: -100, max: 100
        },
        labels: ['January', 'February', 'April', 'May', 'Jun', 'July', 'August'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(128,192,75)',
            backgroundColor: 'rgb(128,192,75)',
          },
          {
            label: 'Dataset 2',
            data: [35, 29, 10, 16, 73, 101, 30],
            borderColor: 'rgb(192,75,173)',
            backgroundColor: 'rgb(192,75,173)',
          }
        ]
      }
    }
  },
  mounted() {
    const ctx = document.getElementById('lineChart');
    new Chart(ctx, {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    });
  }
}
</script>

<style scoped>

</style>