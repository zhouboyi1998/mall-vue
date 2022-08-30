<template>
    <el-container class="app-wrapper">
        <el-aside :width="layoutStore.asideWidth" class="sidebar-container">
            <Sidebar/>
        </el-aside>
        <el-container class="container" :class="{ hidden: layoutStore.sidebarCollapse }">
            <el-header>
                <Header/>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useLayoutStore } from '@/store/layout'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'

// 获取 Pinia 仓库
const layoutStore = useLayoutStore()
</script>

<style lang="scss" scoped>
.app-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.container {
    width: calc(100% - 200px);
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: all 0.28s;

    &.hidden {
        width: calc(100% - 68px);
    }
}

:deep(.el-header) {
    padding: 0;
}

/* 搜索框 × 删除按钮居中 */
:deep(.el-input__suffix) {
    align-items: center;
}
</style>
