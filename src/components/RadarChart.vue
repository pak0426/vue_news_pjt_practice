<template>
  <div style="width: 800px;height: 800px">
    <canvas ref="radarChart" id="radarChart"></canvas>
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
            label: 'D0',
            data: [1, 2, 3, 4, 5 ,6 ,7],
            borderColor: 'rgba(222,26,44, 1)',
            backgroundColor: 'rgba(222,26,44, 0.5)',
          },
          {
            label: 'D1',
            data: [3, 4, 5, 6, 7 ,8 ,9],
            hidden: true,
            borderColor: 'rgba(246,95,66, 1)',
            backgroundColor: 'rgba(246,95,66, 0.5)',
            fill: '-1'
          },
          {
            label: 'D2',
            data: [6, 8, 10, 12, 14, 16, 18],
            borderColor: 'rgba(222,183,26, 1)',
            backgroundColor: 'rgba(222,183,26, 0.5)',
            fill: 1
          },
          {
            label: 'D3',
            data: [10, 11, 15, 17, 19, 24, 25],
            borderColor: 'rgba(122,192,75, 1)',
            backgroundColor: 'rgba(122,192,75, 0.5)',
            fill: false
          },
          {
            label: 'D4',
            data: [15, 19, 20, 22, 27, 30, 31],
            borderColor: 'rgba(75,112,192,1)',
            backgroundColor: 'rgba(75,112,192,0.5)',
            fill: '-1'
          },
          {
            label: 'D5',
            data: [20, 25, 30, 35, 40, 45, 50],
            borderColor: 'rgba(157,26,222,1)',
            backgroundColor: 'rgba(157,26,222,0.5)',
            fill: '-1'
          },
          {
            label: 'D6',
            data: [55, 60, 65, 70, 75, 80, 85],
            borderColor: 'rgba(26,215,222,1)',
            backgroundColor: 'rgba(26,215,222,0.5)',
            fill: {value: 85}
          }
        ]
      }
    }
  },
  mounted() {
    const ctx = this.$refs.radarChart;
    new this.$_Chart(ctx, {
      type: 'radar',
      data: this.data,
      options: {
        plugins: {
          filler: {
            propagate: false
          },
          'samples-filler-analyser': {
            target: 'chart-analyser'
          }
        },
        interaction: {
          intersect: false
        }
      }
    });
  }
}
</script>

<style scoped>

</style>