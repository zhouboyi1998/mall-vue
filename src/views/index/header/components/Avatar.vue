<template>
    <el-dropdown class="avatar-dropdown">
        <span>
            <el-avatar shape="circle">
                <span class="avatar-text">🚀</span>
            </el-avatar>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="handleLogout">
                    <span class="avatar-item-text">退出系统</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import router from '@/router'
import { useTokenStore } from '@/store/token'
import { usePathStore } from '@/store/path'
import { useLayoutStore } from '@/store/layout'
import { ElMessage } from 'element-plus'

// 获取 Pinia 仓库
const tokenStore = useTokenStore()
const pathStore = usePathStore()
const layoutStore = useLayoutStore()

// 退出处理
const handleLogout = () => {
    // 重置 Pinia Store
    tokenStore.$reset()
    pathStore.$reset()
    layoutStore.$reset()
    // 清空 Local Storage
    localStorage.clear()
    // 清空 Session Storage
    sessionStorage.clear()
    // 跳转到登录页
    router.replace('/login')
    // 退出成功提示
    ElMessage({ message: '退出成功', type: 'success', center: true })
}
</script>

<style lang="scss" scoped>
// 下拉菜单项
:deep(.el-dropdown-menu__item) {
    // 设置不换行
    white-space: nowrap;
}

// 下拉菜单项文本
.avatar-item-text {
    color: $text-color;
    font-weight: bold;

    &:hover {
        color: $hover-color;
    }
}
</style>
