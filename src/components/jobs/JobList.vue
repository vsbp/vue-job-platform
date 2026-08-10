<template>
    <section class="job-list">
        <div class="job-list__grid">
            <article
                v-for="job in jobs"
                :key="job.id"
                class="job-card"
            >
                <div class="job-card__header">

                    <div class="job-card__company">
                        <figure class="job-card__image">
                            <img
                                :src="job.image"
                                :alt="`Logo da ${job.company}`"
                                loading="lazy"
                                decoding="async"
                            >
                        </figure>

                        <div>
                            <h2 class="job-card__title">
                                {{ job.title }}
                            </h2>

                            <p class="job-card__company-name">
                                {{ job.company }}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="job-card__save"
                        :aria-label="`Salvar vaga de ${job.title}`"
                        title="Salvar vaga"
                    >
                        <i
                            class="bi bi-bookmark"
                            aria-hidden="true"
                        ></i>
                    </button>

                </div>

                <p class="job-card__description">
                    {{ job.description }}
                </p>

                <div class="job-card__meta">
                    <span>{{ job.workModel }}</span>
                    <span aria-hidden="true">•</span>
                    <span>{{ job.type }}</span>
                    <span aria-hidden="true">•</span>
                    <span>{{ job.level }}</span>
                </div>

                <small class="job-card__published">
                    Publicado {{ job.publishedAt }}
                </small>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'JobList',

    props: {
        jobs: {
            type: Array,
            required: true
        }
    }
}
</script>