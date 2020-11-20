<template>
    <div id="app">
        <div class="container-fluid">
            <HeaderNav />
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import HeaderNav from "./views/HeaderNav.vue"
export default {
    name: 'App',
    components: {
        HeaderNav
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
