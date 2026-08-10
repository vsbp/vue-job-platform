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

