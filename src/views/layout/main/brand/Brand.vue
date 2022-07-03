<template>
    <el-card>
        <el-row :gutter="20" class="header">
            <el-col :span="7">
                <!-- 搜索框 -->
                <el-input
                    clearable
                    v-model="params.records[0].brandName"
                    placeholder="请输入品牌名称"
                />
            </el-col>
            <el-button type="primary" :icon="Search" @click="initTable">搜索</el-button>
            <el-button type="primary">添加用户</el-button>
        </el-row>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
                v-for="(item, index) in column"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
            >
                <template #default v-if="item.prop === 'option'">
                    <el-button type="primary" size="small">查看</el-button>
                    <el-button type="warning" size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { selectBrandPage } from '@/api/brand'
import { column } from './column'

// 请求参数
const params = ref({
    current: 1,
    size: 10,
    records: [
        {
            brandName: ''
        }
    ]
})

// 表格数据
const tableData = ref([])

// 初始化表格
const initTable = async () => {
    // 发送请求获取表格数据
    let result = await selectBrandPage(params.value)
    // 将返回的数据绑定到表格数据中
    tableData.value = result.data.records
}
// 发送初始化请求
initTable()
</script>

<style lang="scss" scoped>
.header {
    padding-bottom: 16px;
    box-sizing: border-box;
}
</style>
