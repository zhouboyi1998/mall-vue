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
        /**
         * 存储策略
         * storage: 指定存储位置, 默认存储到 sessionStorage
         * paths: 指定存储的状态数据, 默认存储的全部状态数据
         */
        strategies: [
            {
                storage: sessionStorage
            }
        ]
    }
})
