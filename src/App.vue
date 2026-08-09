<template>
  <div>
    <AppHeader />
    <AppLayout />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppLayout from './components/layouts/AppLayout.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppLayout
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
  margin-top: 60px;
}
</style>
