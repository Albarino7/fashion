import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// 引入全局样式
import './assets/style/index.less'

// 引入组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(router)
app.use(ElementPlus, { size: 'default', zIndex: 3000 })

app.mount('#app')
