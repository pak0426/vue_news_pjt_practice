import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import chartPlugin from "@/plugins/Chartplugin";

const app = createApp(App);
app.use(router)
app.use(store)
app.use(chartPlugin)

app.mount('#app')
