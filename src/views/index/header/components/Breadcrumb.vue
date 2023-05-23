<template>
    <el-scrollbar>
        <el-breadcrumb class="breadcrumb-container" separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
                <!-- 当前页面的面包屑不可以点击跳转 -->
                <span class="breadcrumb-no-redirect" v-if="item.name === currentBreadcrumb.name">
                    {{ item.name }}
                </span>
                <!-- 其它页面的面包屑可以点击跳转 -->
                <span class="breadcrumb-redirect" v-else @click="handleRedirect(item.path)">
                    {{ item.name }}
                </span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePathStore } from '@/store/path'

// 获取 Vue 路由
const Route = useRoute()
const Router = useRouter()

// 获取 Pinia 仓库
const pathStore = usePathStore()

// 面包屑列表
const breadcrumbList = ref([])

// 当前面包屑
const currentBreadcrumb = ref()

// 初始化面包屑列表
const initBreadcrumbList = () => {
    // 面包屑列表为 Index 路由下的所有子路由
    breadcrumbList.value = Route.matched[0].children
    // 当前面包屑为当前选中的路由
    currentBreadcrumb.value = Route.matched[1]
}

// 点击面包屑时, 切换路径
const handleRedirect = (routePath) => {
    // 将 Path 保存到 Vue Router 中
    Router.push(routePath)
    // 将 Path 保存到 Pinia Store 中
    pathStore.$patch({ routePath: routePath })
}

// 每当打开新的路由时, 执行初始化面包屑列表的操作
watch(Route, () => {
    initBreadcrumbList()
}, {
    deep: true,
    immediate: true
})
</script>

<style scoped lang="scss">

</style>
