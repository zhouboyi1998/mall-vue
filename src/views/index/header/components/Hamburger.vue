<template>
    <div id="hamburger" class="hamburger-container" @click="handleClickHamburger">
        <el-icon class="header-icon" :size="headerIconSize">
            <component :is="Expand" v-if="layoutStore.sidebarCollapse"/>
            <component :is="Fold" v-else/>
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store/layout'
import { Fold, Expand } from '@element-plus/icons-vue'
import variable from '@/style/variable.module.scss'

// 获取 Pinia 仓库
const layoutStore = useLayoutStore()

// 获取 SCSS 变量
const headerIconSize = variable.headerIconSize

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

<style scoped lang="scss">

</style>
