<template>
  <div style="width: 800px;height: 800px">
    <canvas ref="polarChart" id="polarChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [70, 71, 29, 83, 12],
            backgroundColor: [
              'rgba(222,26,44, 0.5)',
              'rgba(246,95,66, 0.5)',
              'rgba(239,210,113, 0.5)',
              'rgba(122,192,75, 0.5)',
              'rgba(75,116,192, 0.5)'
            ],
            opacity: 0.5
          }
        ]
      }
    }
  },
  mounted() {
    const ctx = this.$refs.polarChart;
    new this.$_Chart(ctx, {
      type: 'polarArea',
      data: this.data,
      options: {
        responsive: true,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 18
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Polar Area Chart With Centered Point Labels'
          }
        }
      },
    });
  }
}
</script>

<style scoped>

</style>