<template>
    <v-app-bar :elevation="3">
        <div class="logo-flexbox">
            <img v-bind:src="this.urlLogo" class="logo-header-left">
            <img v-bind:src="this.urlLogoRight" class="logo-header-right">
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'HeaderBar',
        data() {
            return {
                urlLogo: './src/assets/logo-graphic.png',
                urlLogoRight: './src/assets/logo-company-text.png'
            }
        },
    }
</script>

<style scoped>
    .logo-flexbox {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-inline: 36px;
    }

    .logo-header-left{
        width: 34px;
        height: 34px;
    }

    .logo-header-right{
        margin-top: 2px;
        width: 124px;
        height: 34px;
    }
</style>