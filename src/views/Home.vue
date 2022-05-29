<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="日期"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="state" label="状态"/>
      <el-table-column prop="city" label="城市"/>
      <el-table-column prop="address" label="地址"/>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button text size="small" @click.prevent="deleteRow(scope.$index)">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      tableData: []
    }
  }
}
</script>
