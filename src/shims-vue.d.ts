/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    readonly NODE_ENV: string
    readonly VUE_APP_CLIENT_ID: string
    readonly VUE_APP_CLIENT_SECRET: string
    readonly VUE_APP_HOST: string
    readonly VUE_APP_PORT: number
    readonly VUE_APP_BASE_URL: string
    readonly VUE_APP_TARGET: string
    readonly VUE_APP_REQUEST_TIMEOUT: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
