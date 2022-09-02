<template>
    <div id="guide" class="guide-driver-container" @click.prevent.stop="handleClickGuideDriver">
        <el-icon class="header-icon" :size="headerComponentSize">
            <Compass/>
        </el-icon>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { Compass } from '@element-plus/icons-vue'
import variable from '@/assets/style/variable.module.scss'

// 获取 SCSS 变量
const headerComponentSize = variable.headerComponentSize

// 指南引导步骤
const steps = [
    {
        element: '#guide',
        popover: {
            title: '指南',
            description: '欢迎使用后台管理系统',
            position: 'left'
        }
    },
    {
        element: '#screenfull',
        popover: {
            title: '指南',
            description: '切换全屏模式',
            position: 'left'
        }
    },
    {
        element: '#hamburger',
        popover: {
            title: '指南',
            description: '收缩侧边栏',
            position: 'bottom'
        }
    }
]

// 指南
let driver

onMounted(() => {
    // DOM 挂载完成后初始化指南
    driver = new Driver({
        animate: false,
        opacity: 0.75,
        padding: 10,
        allowClose: true,
        overlayClickNext: false,
        doneBtnText: '结束',
        closeBtnText: '关闭',
        nextBtnText: '下一步',
        prevBtnText: '上一步'
    })
})

// 点击指南按钮
const handleClickGuideDriver = () => {
    // 加载指南引导步骤
    driver.defineSteps(steps)
    // 启动指南
    driver.start()
}
</script>

<style lang="scss" scoped>

</style>
