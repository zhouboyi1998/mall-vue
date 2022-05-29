import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ZhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/css/global.css'

const app = createApp(App)
    .use(store)
    .use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app
    .use(ElementPlus, {locale: ZhCn})
    .mount('#app');
