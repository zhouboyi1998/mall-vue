import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import '@/router/guard'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App)
// 将所有 Element Plus 图标全局注册为 Vue 组件
for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}
app.use(store).use(router).mount('#app')
