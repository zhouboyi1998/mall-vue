<template>
    <el-dropdown class="dropdown">
    <span class="el-dropdown-link">
        <el-avatar shape="circle">
            <span class="avatar-text">🚀</span>
        </el-avatar>
    </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="handleLogout">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import router from '@/router'
import { useTokenStore } from '@/store/token'
import { usePathStore } from '@/store/path'
import { ElMessage } from 'element-plus'

// 获取 Pinia 仓库
const tokenStore = useTokenStore()
const pathStore = usePathStore()

// 退出处理
const handleLogout = () => {
    // 重置 Pinia Store
    tokenStore.$reset()
    pathStore.$reset()
    // 清空 Local Storage
    localStorage.clear()
    // 清空 Session Storage
    sessionStorage.clear()
    // 跳转到登录页
    router.replace('/login')
    // 退出成功提示
    ElMessage({ message: '退出成功', type: 'success' })
}
</script>

<style lang="scss" scoped>
// el-avatar 背景颜色改为 none
.el-avatar {
    --el-avatar-background-color: none !important;
    --el-avatar-bg-color: none !important;
}

// 头像文本
.avatar-text {
    font-size: 28px;
}

// 下拉框
.dropdown {
    // 设置鼠标悬停样式
    cursor: pointer;
}

// 下拉框项
:deep(.el-dropdown-menu__item) {
    // 设置不换行
    white-space: nowrap;
}
</style>
