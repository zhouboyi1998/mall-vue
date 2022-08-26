<template>
    <el-card>
        <el-row :gutter="20" class="header">
            <el-col :span="7">
                <!-- 搜索框 -->
                <el-input
                    clearable
                    v-model="params.role.roleName"
                    placeholder="请输入角色名称"
                    @keyup.enter.native="initTable"
                />
            </el-col>
            <el-button type="primary" :icon="Search" @click="initTable">搜索</el-button>
            <el-button type="primary" :icon="Plus">添加</el-button>
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
                    <el-button type="primary" size="small" :icon="View">查看</el-button>
                    <el-button type="warning" size="small" :icon="Edit">编辑</el-button>
                    <el-button type="danger" size="small" :icon="Delete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            background
            :page-sizes="[10, 20, 50, 100]"
            v-model:currentPage="params.current"
            v-model:page-size="params.size"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            class="pagination"
        />
    </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Plus, View, Edit, Delete } from '@element-plus/icons-vue'
import { selectRolePage } from '@/api/admin/role'
import { column } from './column'

// 请求参数
const params = ref({
    current: 1,
    size: 10,
    role: {
        roleName: ''
    }
})

// 表格数据
const tableData = ref([])

// 数据总数
const total = ref(0)

// 初始化表格
const initTable = async () => {
    // 发送请求获取表格数据
    let result = await selectRolePage(params.value)
    // 将返回的数据绑定到表格数据中
    tableData.value = result.data.records
    // 绑定数据总数
    total.value = result.data.total
}

// 发送初始化请求
initTable()

// 选择页码
const handleCurrentChange = (current) => {
    // 改变页码
    params.value.current = current
    // 发起请求
    initTable()
}

// 选择每页数量
const handleSizeChange = (size) => {
    // 回到第 1 页
    params.value.current = 1
    // 改变每页数量
    params.value.size = size
    // 发起请求
    initTable()
}
</script>

<style lang="scss" scoped>
/* 表格头部 */
.header {
    padding-bottom: 16px;
    box-sizing: border-box;
}

/* 分页器 */
.pagination {
    margin-top: 20px;
}
</style>
