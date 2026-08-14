<template>
    <section class='job-list'>
        <div class='job-list__header'>
            <h2 class='job-list__title'>Resultados Recentes</h2>
            <span class='job-list__count'>
                Exibindo {{ rangeStart }}-{{ rangeEnd }} de {{ totalCount }} vagas
            </span>
        </div>

        <div class='job-list__grid'>
            <article
                v-for='job in visibleJobs'
                :key='job.id'
                class='job-card'
                role='button'
                tabindex='0'
                @click='goToJob(job.id)'
                @keydown.enter='goToJob(job.id)'
            >
                <div class='job-card__header'>
                    <figure class='job-card__image'>
                        <img
                            v-if='job.companyLogo'
                            :src='job.companyLogo'
                            :alt='`Logo da ${job.company}`'
                            loading='lazy'
                            decoding='async'
                            @error='handleImageError'
                        >
                        <span v-else class='job-card__initial'>
                            {{ companyInitial(job.company) }}
                        </span>
                    </figure>

                    <div class='job-card__heading'>
                        <h3 class='job-card__title'>
                            {{ job.title }}
                        </h3>
                        <p class='job-card__company-name'>
                            {{ job.company }}
                        </p>
                    </div>

                    <div class='job-card__header-actions'>
                        <span
                            v-if='job.badge'
                            class='job-card__badge'
                            :class='`job-card__badge--${badgeVariant(job.badge)}`'
                        >
                            <i :class='badgeIcon(job.badge)' aria-hidden='true'></i>
                            {{ job.badge }}
                        </span>

                        <button
                            type='button'
                            class='job-card__save'
                            :class='{ "job-card__save--saved": isJobSaved(job.id) }'
                            :aria-label='`Salvar vaga de ${job.title}`'
                            title='Salvar vaga'
                            @click.stop='toggleSave(job.id)'
                        >
                            <i class='bi bi-bookmark' :class='{ "bi-bookmark-fill": isJobSaved(job.id) }' aria-hidden='true'></i>
                        </button>
                    </div>
                </div>

                <div class='job-card__meta'>
                    <span v-if='job.location' class='job-card__pill'>
                        <i class='bi bi-geo-alt' aria-hidden='true'></i>
                        {{ job.location }}
                    </span>

                    <span v-if='job.workModel' class='job-card__pill'>
                        <i :class='workModelIcon(job.workModel)' aria-hidden='true'></i>
                        {{ job.workModel }}
                    </span>

                    <span v-if='job.contractType' class='job-card__pill'>
                        <i class='bi bi-cash-coin' aria-hidden='true'></i>
                        {{ job.contractType }}
                    </span>
                </div>

                <div class='job-card__footer'>
                    <span
                        class='job-card__salary'
                        :class='{ "job-card__salary--muted": !hasSalary(job) }'
                    >
                        {{ formatSalary(job.salaryMin, job.salaryMax) }}
                    </span>
                    <small class='job-card__published'>
                        Publicado {{ job.publishedAt }}
                    </small>
                </div>
            </article>
        </div>

        <div v-if='totalPages > 1' class='job-list__pagination'>
            <button
                type='button'
                class='job-list__page-btn'
                :disabled='currentPage === 1'
                @click='goToPage(currentPage - 1)'
            >
                <i class='bi bi-chevron-left' aria-hidden='true'></i>
            </button>

            <button
                v-for='page in totalPages'
                :key='page'
                type='button'
                class='job-list__page-btn'
                :class='{ "job-list__page-btn--active": page === currentPage }'
                @click='goToPage(page)'
            >
                {{ page }}
            </button>

            <button
                type='button'
                class='job-list__page-btn'
                :disabled='currentPage === totalPages'
                @click='goToPage(currentPage + 1)'
            >
                <i class='bi bi-chevron-right' aria-hidden='true'></i>
            </button>

            <!-- <button
                v-if='currentPage > 1'
                type='button'
                class='job-list__see-less'
                @click='goToPage(1)'
            >
                Ver menos
            </button> -->
        </div>
    </section>
</template>

<script>
    import companyPlaceholder from '../../assets/images/company/placeholder.png'
    const PAGE_SIZE = 9

    export default {
        name: 'JobList',

        props: {
            jobs: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                currentPage: 1,
                companyPlaceholder,
                savedJobIds: JSON.parse(localStorage.getItem('savedJobIds') || '[]')
            }
        },

        computed: {
            totalCount() {
                return this.jobs.length
            },

            totalPages() {
                return Math.max(1, Math.ceil(this.totalCount / PAGE_SIZE))
            },

            visibleJobs() {
                const start = (this.currentPage - 1) * PAGE_SIZE
                return this.jobs.slice(start, start + PAGE_SIZE)
            },

            rangeStart() {
                return this.totalCount === 0 ? 0 : (this.currentPage - 1) * PAGE_SIZE + 1
            },

            rangeEnd() {
                return Math.min(this.currentPage * PAGE_SIZE, this.totalCount)
            }
        },

        watch: {
            jobs() {
                this.currentPage = 1
            }
        },

        methods: {
            goToPage(page) {
                if (page < 1 || page > this.totalPages) {
                    return
                }
                this.currentPage = page
                this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            },

            goToJob(id) {
                this.$router.push(`/vaga/${id}`)
            },

            companyInitial(company) {
                return company ? company.charAt(0).toUpperCase() : '?'
            },

            handleImageError(event) {
                event.target.src = this.companyPlaceholder
            },

            badgeVariant(badge) {
                return badge?.toLowerCase() === 'urgente' ? 'urgent' : 'new'
            },

            badgeIcon(badge) {
                return badge?.toLowerCase() === 'urgente' ? 'bi bi-lightning-charge' : 'bi bi-stars'
            },

            workModelIcon(model) {
                const icons = {
                    remoto: 'bi bi-house',
                    híbrido: 'bi bi-laptop',
                    presencial: 'bi bi-building'
                }
                return icons[model?.toLowerCase()] || 'bi bi-briefcase'
            },

            hasSalary(job) {
                return Boolean(job.salaryMin || job.salaryMax)
            },

            formatSalary(min, max) {
                const format = (value) =>
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        maximumFractionDigits: 0
                    }).format(value)

                if (min && max) {
                    return `${format(min)} – ${format(max)}`
                }
                if (min) {
                    return `A partir de ${format(min)}`
                }
                if (max) {
                    return `Até ${format(max)}`
                }
                return 'Salário a combinar'
            },
            
            isJobSaved(id) {
                return this.savedJobIds.includes(id)
            },

            toggleSave(id) {
                const ids = new Set(this.savedJobIds)
                ids.has(id) ? ids.delete(id) : ids.add(id)
                this.savedJobIds = Array.from(ids)
                localStorage.setItem('savedJobIds', JSON.stringify(this.savedJobIds))
            }
        }
    }
</script>
