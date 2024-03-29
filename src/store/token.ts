import { defineStore } from 'pinia'

export const useTokenStore = defineStore('TOKEN', {
    state: () => ({
        accessToken: null as any,
        refreshToken: null as any,
        expiresIn: 0
    }),
    getters: {},
    actions: {},
    persist: {
        // 开启固化功能
        enabled: true,
        // 存储策略
        strategies: [
            {
                // 存储到 Local Storage
                storage: localStorage
            }
        ]
    }
})
