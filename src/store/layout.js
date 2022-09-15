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
        // 存储策略
        strategies: [
            {
                // 存储到 Session Storage
                storage: sessionStorage
            }
        ]
    }
})
