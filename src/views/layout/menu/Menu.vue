<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        router
        unique-opened
    >
        <el-menu-item index="/home" @click="savePath('/home')">
            <el-icon class="svg-container" :size="20">
                <House />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <el-icon class="svg-container" :size="20">
                    <Goods/>
                </el-icon>
                <span>商品管理</span>
            </template>
            <el-menu-item index="/category" @click="savePath('/category')">
                <el-icon class="svg-container" :size="20">
                    <Iphone/>
                </el-icon>
                <span>分类列表</span>
            </el-menu-item>
            <el-menu-item index="/brand" @click="savePath('/brand')">
                <el-icon class="svg-container" :size="20">
                    <Apple/>
                </el-icon>
                <span>品牌列表</span>
            </el-menu-item>
            <el-menu-item index="/goods" @click="savePath('/goods')">
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
            <el-menu-item index="/order" @click="savePath('/order')">
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
            <el-menu-item index="/user" @click="savePath('/user')">
                <el-icon class="svg-container" :size="20">
                    <UserFilled/>
                </el-icon>
                <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="/role" @click="savePath('/role')">
                <el-icon class="svg-container" :size="20">
                    <Flag/>
                </el-icon>
                <span>角色列表</span>
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
import { ref } from 'vue'
import {
    House,
    Goods, Iphone, Apple, GoodsFilled,
    Tickets, Ticket,
    User, UserFilled, Flag,
    Setting
} from '@element-plus/icons-vue'

// 指定当前的路径, 如果 SessionStorage 中存有路径则直接使用, 如果没有, 使用默认路径 /home
const defaultActive = ref(sessionStorage.getItem('path') || '/home')

// 将当前路径保存到 SessionStorage 中
const savePath = (path) => {
    sessionStorage.setItem('path', `${ path }`)
}
</script>

<style lang="scss" scoped>

</style>
