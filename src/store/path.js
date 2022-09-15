import { defineStore } from 'pinia'

export const usePathStore = defineStore('PATH', {
    state: () => ({
        routePath: '/home'
    }),
    getters: {},
    actions: {},
    persist: {
        // 开启固化功能
        enabled: true,
        // 存储策略
        strategies: [
            {
                // 存储到 Session Storage
                storage: sessionStorage
            }
        ]
    }
})
