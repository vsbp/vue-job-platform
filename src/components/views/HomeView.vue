<template>
    <section class='container py-4'>
        <JobNav />
        <JobSearch />
        <JobStats />
    </section>
</template>

<script>
    import JobNav from '../jobs/JobNav.vue'
    import JobSearch from '../jobs/JobSearch.vue'
    import JobStats from '../jobs/JobStats.vue'

    export default {
        name: 'HomeView',
        components: {
            JobNav,
            JobSearch,
            JobStats
        }
    }
</script>
