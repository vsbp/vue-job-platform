<template>
    <section>
        <div class="wrapper">
            <JobSearch v-model="searchTerm" />
            <JobFilters :options="filterOptions" @update:filters="selectedFilters = $event" />
            <JobStats />
            
            <div class="container-3-colunas">   
                <JobList :jobs="filteredJobs" />
                <div class="container-right-col">
                    <ProfileProgress />
                    <RecentActivity />
                </div>
            </div>     
        </div>
    </section>
</template>

<script>
    import JobSearch from '../jobs/JobSearch.vue'
    import JobFilters from '../jobs/JobFilters.vue'
    import JobStats from '../jobs/JobStats.vue'
    import JobList from '../jobs/JobList.vue'

    import ProfileProgress from '../profile/ProfileProgress.vue'
    import RecentActivity from '../profile/RecentActivity.vue'

    import jobsData from '../mocks/mock.json'
    import { validateJobs } from '../utils/jobValidator'

    function uniqueValues(jobs, extractor) {
        return [...new Set(jobs.map(extractor).filter(Boolean))].sort()
    }


    export default {
        name: 'HomeView',
        components: {
            JobSearch,
            JobFilters,
            JobStats,
            JobList,
            ProfileProgress,
            RecentActivity
        },
        data() {
            const validated = validateJobs(jobsData.jobs)
            console.log('Jobs validados:', validated.length, 'de', jobsData.jobs.length)
            return {
                jobs: validated,
                searchTerm: '',
                selectedFilters: {
                    company: '',
                    state: '',
                    workModel: '',
                    level: '',
                    contractType: ''
                }
            }
        },
        computed: {
            filterOptions() {
                return {
                    companies: uniqueValues(this.jobs, (job) => job.company),
                    states: uniqueValues(this.jobs, (job) => job.location?.split(',').pop()?.trim()),
                    workModels: uniqueValues(this.jobs, (job) => job.workModel),
                    levels: uniqueValues(this.jobs, (job) => job.level),
                    contractTypes: uniqueValues(this.jobs, (job) => job.contractType)
                }
            },

            filteredJobs() {
                const term = this.searchTerm.trim().toLowerCase()
                const { company, state, workModel, level, contractType } = this.selectedFilters

                const searchableFields = ['title', 'company', 'location', 'workModel', 'level']

                return this.jobs.filter((job) => {
                    const matchesSearch = !term || searchableFields.some((field) =>
                        job[field]?.toLowerCase().includes(term)
                    )

                    const matchesCompany = !company || job.company === company
                    const matchesState = !state || job.location?.endsWith(state)
                    const matchesWorkModel = !workModel || job.workModel === workModel
                    const matchesLevel = !level || job.level === level
                    const matchesContractType = !contractType || job.contractType === contractType

                    return (
                        matchesSearch &&
                        matchesCompany &&
                        matchesState &&
                        matchesWorkModel &&
                        matchesLevel &&
                        matchesContractType
                    )
                })
            }
        }
    }
</script>
