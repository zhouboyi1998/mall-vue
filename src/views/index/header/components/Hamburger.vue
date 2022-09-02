<template>
    <div class="hamburger-container" @click="handleClickHamburger">
        <el-icon class="header-icon" :size="headerComponentSize">
            <component :is="Expand" v-if="layoutStore.sidebarCollapse"/>
            <component :is="Fold" v-else/>
        </el-icon>
    </div>
</template>

<script setup>
import { useLayoutStore } from '@/store/layout'
import { Fold, Expand } from '@element-plus/icons-vue'
import variable from '@/assets/style/variable.module.scss'

// 获取 Pinia 仓库
const layoutStore = useLayoutStore()

// 获取 SCSS 变量
const headerComponentSize = variable.headerComponentSize

// 点击汉堡按钮
const handleClickHamburger = () => {
    if (layoutStore.sidebarCollapse) {
        layoutStore.$patch({
            sidebarCollapse: false,
            asideWidth: '200px'
        })
    } else {
        layoutStore.$patch({
            sidebarCollapse: true,
            asideWidth: '68px'
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
