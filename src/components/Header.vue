<!-- 页面头部组件 -->
<template>
  <div class="header">
    <div class="header-left">后台管理系统</div>
    <div class="header-middle"></div>
    <div class="header-right">
      <el-dropdown class="dropdown-style">
        <span class="el-dropdown-link dropdown-content">用户名</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  background: #409EFF;
  border-bottom: 1px solid #CCCCCC;
  display: flex;
}

.header-left {
  width: 200px;
  padding-left: 40px;
  text-align: left;
  font-weight: bold;
  color: #FFFFFF;
}

.header-middle {
  flex: 1;
}

.header-right {
  width: 100px;
  padding-right: 40px;
}

.dropdown-style {
  line-height: 50px;
}

.dropdown-content {
  font-weight: bold;
  color: #FFFFFF;
}
</style>