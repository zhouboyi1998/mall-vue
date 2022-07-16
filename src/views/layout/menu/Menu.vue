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
                <House/>
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu
            v-for="item in menuTree"
            :key="item.id"
            :index="item.menuPath"
        >
            <template #title>
                <el-icon class="svg-container" :size="20">
                    <component :is="item.menuIcon"/>
                </el-icon>
                <span>{{ item.menuTitle }}</span>
            </template>
            <el-menu-item
                v-for="child in item.children"
                :key="child.id"
                :index="child.menuPath"
                @click="savePath(child.menuPath)"
            >
                <el-icon class="svg-container" :size="20">
                    <component :is="child.menuIcon"/>
                </el-icon>
                <span>{{ child.menuTitle }}</span>
            </el-menu-item>
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
import { selectMenuTree } from '@/api/admin/menu'

// 初始化菜单树
const menuTree = ref([])
const initMenuTree = async () => {
    let result = await selectMenuTree()
    menuTree.value = result.data
}
initMenuTree()

// 指定当前的路径, 如果 SessionStorage 中存有路径则直接使用, 如果没有, 使用默认路径 /home
const defaultActive = ref(sessionStorage.getItem('path') || '/home')

// 将当前路径保存到 SessionStorage 中
const savePath = (path) => {
    sessionStorage.setItem('path', `${ path }`)
}
</script>

<style lang="scss" scoped>

</style>
