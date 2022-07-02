<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
    >
        <el-sub-menu index="1">
            <template #title>
                <el-icon class="svg-container" :size="20">
                    <Goods/>
                </el-icon>
                <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
                <el-icon class="svg-container" :size="20">
                    <Iphone/>
                </el-icon>
                <span>分类列表</span>
            </el-menu-item>
            <el-menu-item index="1-2">
                <el-icon class="svg-container" :size="20">
                    <Apple/>
                </el-icon>
                <span>品牌列表</span>
            </el-menu-item>
            <el-menu-item index="1-3">
                <el-icon class="svg-container" :size="20">
                    <GoodsFilled/>
                </el-icon>
                <span>商品列表</span>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon class="svg-container" :size="20">
                    <Tickets/>
                </el-icon>
                <span>订单管理</span>
            </template>
            <el-menu-item index="2-1">
                <el-icon class="svg-container" :size="20">
                    <Ticket/>
                </el-icon>
                <span>订单列表</span>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon class="svg-container" :size="20">
                    <User/>
                </el-icon>
                <span>用户管理</span>
            </template>
            <el-menu-item index="3-1">
                <el-icon class="svg-container" :size="20">
                    <UserFilled/>
                </el-icon>
                <span>用户列表</span>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <el-icon class="svg-container" :size="20">
                    <Setting/>
                </el-icon>
                <span>后台设置</span>
            </template>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import {
    Goods, Iphone, Apple, GoodsFilled,
    Tickets, Ticket,
    User, UserFilled,
    Setting
} from '@element-plus/icons-vue'

const handleOpen = () => {

}

const handleClose = () => {

}
</script>

<style lang="scss" scoped>

</style>
