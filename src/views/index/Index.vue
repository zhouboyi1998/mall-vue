<template>
    <el-container class="app-wrapper">
        <el-aside width="200px" class="sidebar-container">
            <Sidebar/>
        </el-aside>
        <el-container class="container">
            <el-header>
                <Header/>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { reactive } from 'vue'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
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

    &.hiddenContainer {
        width: calc(100% - 60px);
    }
}

::v-deep .el-header {
    padding: 0;
}
</style>
