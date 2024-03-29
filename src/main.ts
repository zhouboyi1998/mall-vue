import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/router/guard'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import filters from '@/filter'
import '@/style/index.scss'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'

// 新建 Vue App
const app = createApp(App)

// 新建 Pinia Store
const pinia = createPinia()

// Pinia 中添加固化插件
pinia.use(piniaPersist)

// 将所有 Element Plus 图标全局注册为 Vue 组件
for (const name in Icons) {
    app.component(name, (Icons as any)[name])
}

// 添加过滤器
filters(app)

// 添加 Vue-Router 插件 / Pinia 插件 / Element-Plus 插件
app.use(router).use(pinia).use(ElementPlus).mount('#app')
