<template>
    <el-scrollbar>
        <el-menu
            class="el-menu-vertical-demo sidebar-menu"
            :background-color="mainColor"
            :text-color="textColor"
            :active-text-color="hoverColor"
            :default-active="$route.path"
            :collapse="layoutStore.sidebarCollapse"
            router unique-opened
        >
            <el-menu-item index="/home" @click="saveRoutePath('/home')">
                <el-icon :size="20">
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
                    <el-icon :size="20">
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
                    <el-icon :size="20">
                        <component :is="child.menuIcon"/>
                    </el-icon>
                    <span>{{ child.menuTitle }}</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import { ref } from 'vue'
import { usePathStore } from '@/store/path'
import { useLayoutStore } from '@/store/layout'
import {
    House,
    Goods, Iphone, Apple, GoodsFilled,
    Tickets, Ticket,
    User, UserFilled, Flag,
    Setting
} from '@element-plus/icons-vue'
import { selectMenuTree } from '@/api/layout/sidebar'
import variable from '@/assets/style/variable.module.scss'

// 获取 SCSS 变量
const mainColor = variable.mainColor
const textColor = variable.textColor
const hoverColor = variable.hoverColor

// 获取 Pinia 仓库
const pathStore = usePathStore()
const layoutStore = useLayoutStore()

// 菜单树列表
const menuTree = ref([])

// 初始化菜单树
const initMenuTree = async () => {
    let result = await selectMenuTree()
    menuTree.value = result.data
}

// 发送初始化请求
initMenuTree()

// 保存当前路径
const saveRoutePath = (routePath) => {
    // 将 Path 保存到 Pinia Store 中
    pathStore.$patch({ routePath: routePath })
}
</script>

<style lang="scss" scoped>

</style>
