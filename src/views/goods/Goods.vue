<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :span="7">
                <el-input
                    :placeholder
                    clearable
                    v-model=""
                >
                </el-input>
            </el-col>
            <el-button type="primary" :icon="Search">搜索</el-button>
        </el-row>
    </el-card>
</template>

<script setup>
import { reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'

const queryForm = reactive({
    current: 1,
    size: 10,
    query: {}
})
</script>

<style lang="scss" scoped>

</style>
