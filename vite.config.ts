import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }: ConfigEnv): UserConfig => {
    // 环境变量
    const env = loadEnv(mode, process.cwd())

    return {
        // 插件
        plugins: [
            vue()
        ],

        // 解析配置
        resolve: {
            // 路径别名配置
            alias: {
                '@': path.resolve('./src')
            }
        },

        // CSS 配置
        css: {
            // 预处理器
            preprocessorOptions: {
                // 全局引入 SCSS 样式文件
                scss: {
                    additionalData: `@import '@/style/variable.scss';`
                }
            }
        },

        // 本地开发反向代理服务
        server: {
            // HOST
            host: env.VITE_APP_HOST,
            // PORT
            port: Number(env.VITE_APP_PORT),
            // 是否自动打开浏览器
            open: true,
            // 反向代理
            proxy: {
                // 匹配代理规则的路径
                [env.VITE_APP_BASE_URL]: {
                    // 目标地址
                    target: env.VITE_APP_TARGET,
                    // 是否将请求头中的前端项目地址替换成目标地址
                    changeOrigin: true,
                    // 是否代理 HTTPS
                    https: false,
                    // 是否代理 WebSocket
                    ws: false,
                    // 去除匹配代理规则的路径
                    rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_URL), '')
                }
            }
        }
    }
}
