<template>
  <div style="width: 800px;height: 400px">
    <canvas ref="lineChart" id="lineChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
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
    new this.$_Chart(ctx, {
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