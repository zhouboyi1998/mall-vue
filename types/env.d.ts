// 环境变量在 TypeScript 文件中智能提示
interface ImportMetaEnv {
    readonly NODE_ENV: string
    readonly VITE_APP_CLIENT_ID: string
    readonly VITE_APP_CLIENT_SECRET: string
    readonly VITE_APP_HOST: string
    readonly VITE_APP_PORT: number
    readonly VITE_APP_BASE_URL: string
    readonly VITE_APP_TARGET: string
    readonly VITE_APP_REQUEST_TIMEOUT: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
