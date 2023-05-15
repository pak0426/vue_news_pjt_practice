<template>
  <div style="width: 800px;height: 400px">
    <canvas ref="barChart" id="barChart"></canvas>
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
            label: 'Fully Rounded',
            data: [-80, 25, 40, 78, 98, -97, -12],
            borderColor: 'rgb(192,75,145)',
            backgroundColor: 'rgb(192,75,145)',
            borderWidth: 3,
            borderRadius: 1,
            borderSkipped: false,
          },
          {
            label: 'Small Radius',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(75,192,134)',
            backgroundColor: 'rgb(75,192,134)',
            borderWidth: 3,
            borderRadius: 5,
            borderSkipped: false,
          }
        ]
      }
    }
  },
  mounted() {
    const ctx = this.$refs.barChart;
    new this.$_Chart(ctx, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      }
    });
  }
}
</script>

<style scoped>

</style>