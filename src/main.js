import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import '@/router/guard'
import * as ElIcons from '@element-plus/icons-vue'

// 新建 Vue App
const app = createApp(App)

// 新建 Pinia Store
const pinia = createPinia()

// 将所有 Element Plus 图标全局注册为 Vue 组件
for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}

// 安装 Vue-Router 插件 / Pinia 插件
app.use(router).use(pinia).mount('#app')
