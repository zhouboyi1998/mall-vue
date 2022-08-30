<template>
    <div class="hamburger-container" @click="handleClickHamburger">
        <el-icon>
            <component class="hamburger-icon" :is="Expand" v-if="layoutStore.sidebarCollapse"/>
            <component class="hamburger-icon" :is="Fold" v-else/>
        </el-icon>
    </div>
</template>

<script setup>
import { useLayoutStore } from '@/store/layout'
import { Fold, Expand } from '@element-plus/icons-vue'

// 获取 Pinia 仓库
const layoutStore = useLayoutStore()

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
.hamburger-container {
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
}

.hamburger-icon {
    color: $main-color;
    cursor: pointer;

    &:hover {
        color: $hover-color;
    }
}
</style>
