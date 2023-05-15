<template>
  <div style="width: 800px;height: 400px">
    <canvas ref="barChart" id="barChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DATA_COUNT: 7,
      labels: ['January', 'February', 'April', 'May', 'Jun', 'July', 'August'],
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Fully Rounded',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 0.2)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 3,
            borderRadius: 1,
            borderSkipped: false,
          },
          {
            label: 'Small Radius',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#0054FF',
            backgroundColor: '#0054FF',
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
      // data: {
      //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //   datasets: [{
      //     label: '# of Votes',
      //     data: [12, 19, 3, 5, 2, 3],
      //     borderWidth: 1
      //   }]
      // },
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