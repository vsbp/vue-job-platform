<template>
    <section>
        <JobNav />
        <div class='container py-4'>
            <JobSearch v-model="searchTerm" />
            <JobStats />
            <JobList :jobs="filteredJobs" />
        </div>
    </section>
</template>

<script>
    import JobNav from '../jobs/JobNav.vue'
    import JobSearch from '../jobs/JobSearch.vue'
    import JobStats from '../jobs/JobStats.vue'
    import JobList from '../jobs/JobList.vue'

    import jobsData from '../mocks/mock.json'
    import { validateJobs } from '../utils/jobValidator'

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
                jobs: validateJobs(jobsData.jobs),
                searchTerm: ''
            }
        },
        computed: {
            filteredJobs() {
                const term = this.searchTerm.trim().toLowerCase()

                if (!term) {
                    return this.jobs
                }

                const searchableFields = ['title', 'company', 'location', 'workModel', 'level']

                return this.jobs.filter((job) =>
                    searchableFields.some((field) =>
                        job[field]?.toLowerCase().includes(term)
                    )
                )
            }
        }
    }
</script>
