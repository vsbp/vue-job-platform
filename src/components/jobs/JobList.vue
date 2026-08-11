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
            >
                <div class='job-card__header'>
                    <div class='job-card__company'>
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
                    </div>

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
                        :aria-label='`Salvar vaga de ${job.title}`'
                        title='Salvar vaga'
                    >
                        <i class='bi bi-bookmark' aria-hidden='true'></i>
                    </button>
                </div>

                <h3 class='job-card__title'>
                    {{ job.title }}
                </h3>

                <p class='job-card__company-name'>
                    {{ job.company }}
                </p>

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

                <small class='job-card__published'>
                    Publicado {{ job.publishedAt }}
                </small>
            </article>
        </div>

        <div v-if='hasMore' class='job-list__footer'>
            <button type='button' class='job-list__load-more' @click='loadMore'>
                Carregar Mais Vagas
            </button>
        </div>
    </section>
</template>

<script>
    import companyPlaceholder from '../../assets/images/company/placeholder.png'
    const PAGE_SIZE = 3

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
                visibleCount: PAGE_SIZE,
                companyPlaceholder
            }
        },

        computed: {
            totalCount() {
                return this.jobs.length
            },

            visibleJobs() {
                return this.jobs.slice(0, this.visibleCount)
            },

            hasMore() {
                return this.visibleCount < this.totalCount
            },

            rangeStart() {
                return this.totalCount === 0 ? 0 : 1
            },

            rangeEnd() {
                return Math.min(this.visibleCount, this.totalCount)
            }
        },

        watch: {
            jobs() {
                this.visibleCount = PAGE_SIZE
            }
        },

        methods: {
            loadMore() {
                this.visibleCount += PAGE_SIZE
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
            }
        }
    }
</script>

