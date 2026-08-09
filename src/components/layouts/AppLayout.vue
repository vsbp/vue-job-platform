<template>
    <div>
        <HomeView />
        <PublishJob />
    </div>
</template>

<script>
    import HomeView from '../views/HomeView.vue'
    import PublishJob from '../views/PublishJob.vue'

    export default {
        name: 'AppLayout',
        components: {
            HomeView,
            PublishJob
        }
    }
</script>