import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
    install(app) {
        console.log('ChartPlugin loaded');
        app.config.globalProperties.$_Chart = Chart;
    }
}