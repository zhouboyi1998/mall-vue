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

<script setup>
import Hamburger from './components/Hamburger'
import Breadcrumb from './components/Breadcrumb'
import Avatar from './components/Avatar'
import Theme from './components/Theme'
import Driver from './components/Driver'
import ScreenFull from './components/ScreenFull'
</script>

<style lang="scss" scoped>

</style>
