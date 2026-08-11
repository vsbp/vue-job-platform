<template>
    <div>
        <AppHeader />
        <AppLayout />
        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from './components/layout/AppHeader.vue'
    import AppLayout from './components/layouts/AppLayout.vue'
    import AppFooter from './components/layout/AppFooter.vue'

    export default {
        name: 'App',
            components: {
            AppHeader,
            AppLayout,
            AppFooter
        }
    }
</script>

