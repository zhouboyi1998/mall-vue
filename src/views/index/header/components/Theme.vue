<template>
    <el-dropdown class="theme-dropdown">
        <span>
            <el-avatar shape="circle">
                <span class="theme-text">🛸</span>
            </el-avatar>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="theme in themeList"
                    :key="theme.id"
                    @click="handleChangeTheme(theme)">
                    <span v-bind:style="{color: theme.basicCode}" class="theme-item-text">
                        {{ theme.basicName }}
                    </span>
                    <span class="theme-item-text">&nbsp;/&nbsp;</span>
                    <span v-bind:style="{color: theme.hoverCode}" class="theme-item-text">
                        {{ theme.hoverName }}
                    </span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { selectThemeList } from '@/api/system/theme'

// 主题列表
const themeList = ref([])

// 初始化主题列表
const initThemeList = async () => {
    let result = await selectThemeList()
    themeList.value = result.data
}

// 发送初始化请求
initThemeList()

// 更换主题
const handleChangeTheme = (theme) => {
    document.documentElement.style.setProperty('--basic', theme.basicCode)
    document.documentElement.style.setProperty('--hover', theme.hoverCode)
}
</script>

<style scoped lang="scss">
// 下拉菜单项
:deep(.el-dropdown-menu__item) {
    // 设置不换行
    white-space: nowrap;
}

// 下拉菜单项文本
.theme-item-text {
    color: $text-color;
    font-weight: bold;
}
</style>
