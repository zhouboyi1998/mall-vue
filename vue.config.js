const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const host = process.env.VUE_APP_HOST
const port = process.env.VUE_APP_PORT
const target = process.env.VUE_APP_REQUEST_BASE_URL_TARGET

module.exports = {
    // Webpack 配置
    configureWebpack: config => {
        config.plugins.push(AutoImport({
            resolvers: [ElementPlusResolver()]
        }))
        config.plugins.push(Components({
            resolvers: [ElementPlusResolver()]
        }))
    },
    // CSS 配置
    css: {
        loaderOptions: {
            // SASS 配置
            sass: {
                // 全局引入样式文件
                additionalData: `@import "@/assets/style/variable.scss";`
            }
        }
    },
    // 开发配置
    devServer: {
        // 当前项目 IP
        host: `${ host }`,
        // 当前项目 Port
        port: `${ port }`,
        // 是否自动打开浏览器
        open: true,
        // 代理规则
        proxy: {
            // 请求路径以 /api 开头时, 将请求代理到 "目标地址"
            '/api': {
                // 是否代理 WebSocket
                ws: false,
                // 是否代理 HTTPS
                https: false,
                // 目标地址 (服务端地址)
                target: `${ target }`,
                // 是否将请求头中的 "当前项目地址" 替换成 "目标地址"
                changeOrigin: true,
                // 去除用于代理规则匹配的路径 /api
                pathRewrite: {
                    ['^/api']: ''
                }
            }
        }
    }
}
