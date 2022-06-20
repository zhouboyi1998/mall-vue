const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = {
    configureWebpack: config => {
        config.plugins.push(AutoImport({
            resolvers: [ElementPlusResolver()],
        }))
        config.plugins.push(Components({
            resolvers: [ElementPlusResolver()],
        }))
    },
    devServer: {
        host: "127.0.0.1",
        port: 18011,
        open: true,
        proxy: {
            // Vue 请求路径中包含 /api 时, 自动代理请求到服务端地址
            '/api': {
                ws: false,
                https: false,
                // 服务端 IP 地址
                target: "http://127.0.0.1:18071",
                // 将前端 IP 地址转换为服务端 IP 地址
                changeOrigin: true,
                // 删除用于匹配规则的 /api 路径
                pathRewrite: {
                    ["^/api"]: ""
                }
            }
        }
    },
    // 全局导入以下 CSS 样式
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/variables.scss";
                    @import "@/assets/scss/mixin.scss";
                `
            }
        }
    }
}
