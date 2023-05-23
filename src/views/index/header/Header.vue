<template>
    <div class="header-container">
        <Hamburger/>
        <Breadcrumb/>
        <div class="header-right-container">
            <ScreenFull/>
            <Driver/>
            <Theme/>
            <Avatar/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Hamburger from './components/Hamburger.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Avatar from './components/Avatar.vue'
import Theme from './components/Theme.vue'
import Driver from './components/Driver.vue'
import ScreenFull from './components/ScreenFull.vue'
</script>

<style scoped lang="scss">

</style>
