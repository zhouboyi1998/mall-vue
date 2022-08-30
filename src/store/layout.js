import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('LAYOUT', {
    state: () => ({
        // 侧边栏是否收起 (默认不收起)
        sidebarCollapse: false,
        // 侧边栏宽度
        asideWidth: '200px',
        // 面包屑列表
        breadcrumbList: ['/home', '/brand']
    }),
    getters: {},
    actions: {}
})
