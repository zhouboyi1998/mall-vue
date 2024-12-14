<template>
    <el-scrollbar>
        <el-card class="main-container" shadow="hover">
            <el-row :gutter="20" class="table-header">
                <el-col :span="7">
                    <!-- 搜索框 -->
                    <el-input
                        clearable
                        v-model="params.resource.resourceName"
                        placeholder="请输入资源名称"
                        @change="initTable"
                        @input="initTable"
                    />
                </el-col>
                <el-button class="option-button" :color="primaryColor" :icon="Search" @click="initTable">搜索</el-button>
                <el-button class="option-button" :color="primaryColor" :icon="Plus">添加</el-button>
            </el-row>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column
                    v-for="(item, index) in column"
                    :key="index"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width">
                    <template v-slot="{ row }" v-if="item.prop === 'status'">
                        <el-switch
                            class="ml-2"
                            v-model="row.status"
                            :active-value="1"
                            :inactive-value="0"
                            :active-color="successColor"
                            :inactive-color="dangerColor"
                            @change="changeStatus(row)"
                        />
                    </template>
                    <template v-slot="{ row }" v-else-if="item.prop === 'createTime'">
                        {{ $filters.datetimeFormatFilter(row.createTime) }}
                    </template>
                    <template v-slot="{ row }" v-else-if="item.prop === 'updateTime'">
                        {{ $filters.datetimeFormatFilter(row.updateTime) }}
                    </template>
                    <template #default v-else-if="item.prop === 'option'">
                        <el-button class="option-button" :color="successColor" size="small" :icon="Document">查看</el-button>
                        <el-button class="option-button" :color="warningColor" size="small" :icon="Edit">编辑</el-button>
                        <el-button class="option-button" :color="dangerColor" size="small" :icon="Delete">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="table-pagination"
                layout="total, sizes, prev, pager, next, jumper"
                background
                :page-sizes="[10, 20, 50, 100]"
                v-model:currentPage="params.current"
                v-model:page-size="params.size"
                :total="total"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            />
        </el-card>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Plus, Document, Edit, Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { selectResourcePage, updateResource } from '@/api/user/resource'
import { column } from './column'
import variable from '@/style/variable.module.scss'
import { HttpStatus } from '@/constants'

// 获取 SCSS 变量
const primaryColor = variable.primaryColor
const successColor = variable.successColor
const warningColor = variable.warningColor
const dangerColor = variable.dangerColor

// 请求参数
const params = ref({
    current: 1,
    size: 10,
    resource: {
        resourceName: ''
    }
})

// 表格数据
const tableData = ref([])

// 数据总数
const total = ref(0)

// 初始化表格
const initTable = async () => {
    // 发送请求获取表格数据
    let result = await selectResourcePage(params.value)
    // 将返回的数据绑定到表格数据中
    tableData.value = result.data.data.records
    // 绑定数据总数
    total.value = result.data.data.total
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

// 修改状态
const changeStatus = async (row) => {
    let resource = { id: row.id, status: row.status }
    let result = await updateResource(resource)
    if (result.status === HttpStatus.OK) {
        if (row.status === 1) {
            ElMessage.success({ message: '启用成功', center: true })
        } else if (row.status === 0) {
            ElMessage.success({ message: '禁用成功', center: true })
        }
    } else {
        ElMessage.error({ message: '状态修改失败', center: true })
    }
}
</script>

<style scoped lang="scss">

</style>
