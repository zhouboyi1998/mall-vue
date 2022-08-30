import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('LAYOUT', {
    state: () => ({
        // 侧边栏是否收起 (默认不收起)
        sidebarCollapse: false,
        // 侧边栏宽度
        asideWidth: '200px'
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
