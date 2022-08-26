<template>
    <div class="hamburger-container">
        <el-icon>
            <Fold/>
        </el-icon>
    </div>
</template>

<script setup>
import { Fold } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.hamburger-container {
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
