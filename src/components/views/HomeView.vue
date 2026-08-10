<template>
    <section class='container py-4'>
        <JobNav />
        <JobSearch />
        <JobStats />
        <JobList :jobs="jobs" />
    </section>
</template>

<script>
    import JobNav from '../jobs/JobNav.vue'
    import JobSearch from '../jobs/JobSearch.vue'
    import JobStats from '../jobs/JobStats.vue'
    import JobList from '../jobs/JobList.vue'

    import jobsData from '../mocks/mock.json'

    export default {
        name: 'HomeView',
        components: {
            JobNav,
            JobSearch,
            JobStats,
            JobList
        },
        data() {
            return {
                jobs: jobsData.jobs
            }
        }
    }
</script>
