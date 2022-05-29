<template>
  <div>
    <!-- 页面头部 -->
    <Header/>
    <!-- 页面主体 -->
    <div class="page-body">
      <!-- 侧边栏 -->
      <Sidebar/>
      <!-- 内容区域 -->
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default {
  name: "App",
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
.page-body {
  display: flex;
}

.page-body .content {
  flex: 1;
}
</style>
