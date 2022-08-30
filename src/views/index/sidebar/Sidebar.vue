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
        <el-menu-item index="/home" @click="saveRoutePath('/home')">
            <el-icon class="svg-container" :size="20">
                <House/>
            </el-icon>
            <span>系统首页</span>
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
                @click="saveRoutePath(child.menuPath)"
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
import { usePathStore } from '@/store/path'
import {
    House,
    Goods, Iphone, Apple, GoodsFilled,
    Tickets, Ticket,
    User, UserFilled, Flag,
    Setting
} from '@element-plus/icons-vue'
import { selectMenuTree } from '@/api/layout/sidebar'

// 获取 Pinia 仓库
const pathStore = usePathStore()

// 菜单树列表
const menuTree = ref([])

// 初始化菜单树
const initMenuTree = async () => {
    let result = await selectMenuTree()
    menuTree.value = result.data
}

// 发送初始化请求
initMenuTree()

// 指定当前的路径, 如果有保存当前路径, 直接使用, 如果没有保存, 使用默认路径 /home
const defaultActive = ref(
    pathStore.routePath || sessionStorage.getItem('routePath') || '/home'
)

// 保存当前路径
const saveRoutePath = (routePath) => {
    // 将 Path 保存到 Pinia Store 中
    pathStore.$patch({ routePath: routePath })
    // 将 Path 保存到 Session Storage 中
    sessionStorage.setItem('routePath', `${ routePath }`)
}
</script>

<style lang="scss" scoped>

</style>
