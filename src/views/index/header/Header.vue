<template>
    <div class="header-container">
        <Hamburger/>
        <Breadcrumb/>
        <div class="header-right-container">
            <ScreenFull/>
            <Avatar/>
        </div>
    </div>
</template>

<script setup>
import Hamburger from './components/Hamburger'
import Breadcrumb from './components/Breadcrumb'
import Avatar from './components/Avatar'
import ScreenFull from './components/ScreenFull'
</script>

<style lang="scss" scoped>

</style>
