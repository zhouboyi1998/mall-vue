<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
            <!-- 面包屑中最后一个置灰, 不能点击 -->
            <span class="no-redirect" v-if="index === breadcrumbList.length - 1">
                {{ item.name }}
            </span>
            <!-- 其它面包屑可以点击, 并且点击后跳转 -->
            <span class="redirect" v-else @click="handleRedirect(item.path)">
                {{ item.name }}
            </span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 面包屑列表
const breadcrumbList = ref([])

// 初始化面包屑列表
const initBreadcrumbList = () => {
    // 面包屑列表为当前路由表
    breadcrumbList.value = route.matched
}

// 点击面包屑时, 切换路径
const handleRedirect = (path) => {
    router.push(path)
}

// 每当打开新的路由时, 执行初始化面包屑列表的操作
watch(route, () => {
    initBreadcrumbList()
}, {
    deep: true,
    immediate: true
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.no-redirect {
    color: #97A8BE;
    cursor: text;
}

.redirect {
    color: #FFD04B;
    cursor: pointer;

    &:hover {
        color: $menu-background-color;
    }
}
</style>
