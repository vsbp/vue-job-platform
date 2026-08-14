<template>
    <div v-if='job' class='job-detail'>
        <nav class='job-detail__breadcrumb' aria-label='breadcrumb'>
            <router-link to='/'>
                <i class='bi bi-house' aria-hidden='true'></i>
                Home
            </router-link>
            <i class='bi bi-chevron-right' aria-hidden='true'></i>
            <router-link to='/'>Buscar</router-link>
            <i class='bi bi-chevron-right' aria-hidden='true'></i>
            <span>Detalhes da vaga</span>
        </nav>

        <div class='job-detail__layout'>
            <div class='job-detail__main'>
                <header class='job-detail__hero'>
                    <figure class='job-detail__logo'>
                        <img
                            v-if='job.companyLogo'
                            :src='job.companyLogo'
                            :alt='`Logo da ${job.company}`'
                            @error='handleImageError'
                        >
                        <span v-else class='job-detail__logo-initial'>
                            {{ companyInitial(job.company) }}
                        </span>
                    </figure>

                    <div class='job-detail__heading'>
                        <h1 class='job-detail__title'>{{ job.title }}</h1>
                        <p class='job-detail__subtitle'>
                            <strong>{{ job.company }}</strong>
                            <span class='job-detail__dot' aria-hidden='true'>•</span>
                            <i class='bi bi-geo-alt' aria-hidden='true'></i>
                            {{ job.location }}
                        </p>

                        <div class='job-detail__tags'>
                            <span v-if='job.contractType' class='job-detail__tag'>
                                <i class='bi bi-briefcase' aria-hidden='true'></i>
                                {{ job.contractType }}
                            </span>
                            <span v-if='hasSalary' class='job-detail__tag'>
                                <i class='bi bi-cash-coin' aria-hidden='true'></i>
                                {{ formattedSalary }}
                            </span>
                            <span
                                v-for='tech in job.stack'
                                :key='tech'
                                class='job-detail__tag'
                            >
                                <i class='bi bi-code-slash' aria-hidden='true'></i>
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </header>

                <section class='job-detail__section'>
                    <h2>Sobre a vaga</h2>
                    <p
                        v-for='(paragraph, index) in descriptionParagraphs'
                        :key='index'
                    >
                        {{ paragraph }}
                    </p>
                </section>

                <section v-if='job.responsibilities?.length' class='job-detail__section'>
                    <h2>Responsabilidades</h2>
                    <ul class='job-detail__list job-detail__list--check'>
                        <li v-for='(item, index) in job.responsibilities' :key='index'>
                            <i class='bi bi-check-circle' aria-hidden='true'></i>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </section>

                <section v-if='job.requirements?.length' class='job-detail__section'>
                    <h2>Requisitos</h2>
                    <ul class='job-detail__list job-detail__list--arrow'>
                        <li v-for='(item, index) in job.requirements' :key='index'>
                            <i class='bi bi-chevron-right' aria-hidden='true'></i>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </section>
            </div>

            <aside class='job-detail__aside'>
                <div class='job-detail__actions'>
                    <button
                        type='button'
                        class='job-detail__apply'
                        @click='handleApply'
                    >
                        Candidatar-se
                        <i class='bi bi-box-arrow-up-right' aria-hidden='true'></i>
                    </button>

                    <button
                        type='button'
                        class='job-detail__save'
                        :class='{ "job-detail__save--active": isSaved }'
                        @click='handleToggleSave'
                    >
                        <i class='bi bi-bookmark' aria-hidden='true'></i>
                        {{ isSaved ? 'Vaga salva' : 'Salvar vaga' }}
                    </button>

                    <div class='job-detail__stats'>
                        <div class='job-detail__stat'>
                            <span>
                                <i class='bi bi-clock' aria-hidden='true'></i>
                                Publicado
                            </span>
                            <strong>{{ job.publishedAt }}</strong>
                        </div>
                        <div class='job-detail__stat'>
                            <span>
                                <i class='bi bi-people' aria-hidden='true'></i>
                                Candidaturas
                            </span>
                            <strong>{{ job.applicationsCount ?? 0 }} candidaturas</strong>
                        </div>
                    </div>

                    <p v-if='job.activelyRecruiting' class='job-detail__recruiting'>
                        <i class='bi bi-lightning-charge-fill' aria-hidden='true'></i>
                        Contratando ativamente
                    </p>
                </div>

                <div class='job-detail__company'>
                    <h2>Sobre a empresa</h2>

                    <div class='job-detail__company-header'>
                        <figure class='job-detail__logo job-detail__logo--sm'>
                            <img
                                v-if='job.companyLogo'
                                :src='job.companyLogo'
                                :alt='`Logo da ${job.company}`'
                                @error='handleImageError'
                            >
                            <span v-else class='job-detail__logo-initial'>
                                {{ companyInitial(job.company) }}
                            </span>
                        </figure>
                        <div>
                            <strong>{{ job.company }}</strong>
                            <p v-if='job.companyIndustry'>{{ job.companyIndustry }}</p>
                        </div>
                    </div>

                    <p v-if='job.companyDescription' class='job-detail__company-description'>
                        {{ job.companyDescription }}
                    </p>

                    <router-link
                        v-if='job.companyId'
                        :to='`/empresa/${job.companyId}`'
                        class='job-detail__company-link'
                    >
                        Ver perfil da empresa
                        <i class='bi bi-arrow-right' aria-hidden='true'></i>
                    </router-link>
                </div>
            </aside>
        </div>
    </div>

    <div v-else class='job-detail__empty'>
        <p>Vaga não encontrada.</p>
        <router-link to='/'>Voltar para a busca</router-link>
    </div>
</template>

<script>
    import mockJobs from '../mocks/mock.json'
    import companyPlaceholder from '../../assets/images/company/placeholder.png'

    const STORAGE_KEY = 'userJobs'

    export default {
        name: 'JobDetail',

        data() {
            return {
                companyPlaceholder,
                savedJobIds: this.loadSavedJobIds()
            }
        },

        computed: {
            allJobs() {
                const userJobs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
                return [...mockJobs.jobs, ...userJobs]
            },

            job() {
                return this.allJobs.find((job) => String(job.id) === String(this.$route.params.id))
            },

            isSaved() {
                return this.job ? this.savedJobIds.includes(this.job.id) : false
            },

            hasSalary() {
                return Boolean(this.job?.salaryMin || this.job?.salaryMax)
            },

            formattedSalary() {
                const format = (value) =>
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        maximumFractionDigits: 0
                    }).format(value)

                const { salaryMin, salaryMax } = this.job || {}

                if (salaryMin && salaryMax) {
                    return `${format(salaryMin)} - ${format(salaryMax)}`
                }
                if (salaryMin) {
                    return `A partir de ${format(salaryMin)}`
                }
                if (salaryMax) {
                    return `Até ${format(salaryMax)}`
                }
                return ''
            },

            descriptionParagraphs() {
                if (!this.job?.description) {
                    return []
                }
                return this.job.description.split('\n').filter(Boolean)
            }
        },

        methods: {
            companyInitial(company) {
                return company ? company.charAt(0).toUpperCase() : '?'
            },

            handleImageError(event) {
                event.target.src = this.companyPlaceholder
            },

            loadSavedJobIds() {
                return JSON.parse(localStorage.getItem('savedJobIds') || '[]')
            },

            handleToggleSave() {
                if (!this.job) {
                    return
                }
                const ids = new Set(this.savedJobIds)
                ids.has(this.job.id) ? ids.delete(this.job.id) : ids.add(this.job.id)
                this.savedJobIds = Array.from(ids)
                localStorage.setItem('savedJobIds', JSON.stringify(this.savedJobIds))
            },

            handleApply() {
                if (!this.job) {
                    return
                }
                this.$emit('apply', this.job.id)
            }
        }
    }
</script>