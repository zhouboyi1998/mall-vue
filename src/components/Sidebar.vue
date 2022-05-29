<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo menu-style">
      <!--@open="handleOpen"-->
      <!--@close="handleClose"-->
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span class="menu-span">导航一</span>
        </template>
        <el-menu-item index="1-1">
          <span class="menu-item">菜单1</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <span class="menu-item">菜单2</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <span class="menu-item">菜单3</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Avatar /></el-icon>
        <span class="menu-span">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span class="menu-span">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span class="menu-span">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
.menu-style {
  width: 200px;
  min-height: calc(100vh - 50px);
}

.menu-span {
  font-weight: bold;
}

.menu-item {
  padding-left: 20px;
  font-weight: bold;
}
</style>