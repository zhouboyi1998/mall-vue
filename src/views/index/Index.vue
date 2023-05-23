<template>
    <el-container>
        <el-aside :width="layoutStore.asideWidth" class="sidebar-container">
            <Sidebar/>
        </el-aside>
        <el-container class="content-container" :class="{ hidden: layoutStore.sidebarCollapse }">
            <el-header>
                <Header/>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store/layout'
import Sidebar from './sidebar/Sidebar.vue'
import Header from './header/Header.vue'

// 获取 Pinia 仓库
const layoutStore = useLayoutStore()
</script>

<style scoped lang="scss">

</style>
