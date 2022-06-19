<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList = reactive([])
const initBreadcrumbList = () => {
    breadcrumbList.value = route.matched
    console.log(route.matched)
}

watch(
    route,
    () => {
        initBreadcrumbList()
    },
    {
        deep: true,
        immediate: true
    }
)
</script>

<style lang="scss" scoped>

</style>
