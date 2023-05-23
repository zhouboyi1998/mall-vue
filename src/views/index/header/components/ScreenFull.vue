<template>
    <div id="screenfull" class="screen-full-container" @click="handleClickScreenFull">
        <el-icon class="header-icon" :size="headerComponentSize">
            <component :is="Crop" v-if="isScreenFull"/>
            <component :is="FullScreen" v-else/>
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import screenfull from 'screenfull'
import { FullScreen, Crop } from '@element-plus/icons-vue'
import variable from '@/style/variable.module.scss'

// 获取 SCSS 变量
const headerComponentSize = variable.headerComponentSize

// 当前是否为全屏
const isScreenFull = ref()

onBeforeMount(() => {
    screenfull.on('change', changeIsScreenFull)
})

onBeforeUnmount(() => {
    screenfull.off('change', changeIsScreenFull)
})

// 改变是否为全屏的标识
const changeIsScreenFull = () => {
    isScreenFull.value = screenfull.isFullscreen
}

// 点击全屏按钮
const handleClickScreenFull = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle()
    }
}
</script>

<style scoped lang="scss">

</style>
