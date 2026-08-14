<template>
    <div>
        <AppHeader />
        <router-view />
        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from './components/layout/AppHeader.vue'
    import AppFooter from './components/layout/AppFooter.vue'

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>