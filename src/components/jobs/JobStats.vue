<template>
    <section class="job-stats">
        <div class="job-stats__grid">
            <article class="job-stat">
                <span class="job-stat__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <circle cx="9" cy="8" r="3" />
                        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                        <path d="M16 11a3 3 0 1 0 0-6" />
                        <path d="M17 14c2.2.7 4 2.8 4 6" />
                    </svg>
                </span>
                <p class="job-stat__title">Profissionais cadastrados</p>
                <strong class="job-stat__value">125</strong>
            </article>

            <article class="job-stat job-stat--featured">
                <span class="job-stat__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M3 12h18" />
                    </svg>
                </span>
                <p class="job-stat__title">Vagas abertas</p>
                <strong class="job-stat__value">25</strong>
            </article>

            <article class="job-stat">
                <span class="job-stat__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="2.5" />
                    </svg>
                </span>

                <p class="job-stat__title">Visitantes online</p>
                <strong class="job-stat__value">{{ visitantesOnline }}</strong>
            </article>

        </div>
    </section>
</template>

<script>
    export default {
        name: 'JobStats',

        data: () => ({
            visitantesOnline: 0
        }),
        methods: {
            getVisitantesOnline() {
                this.visitantesOnline = Math.floor(Math.random() * 101)
            }
        },
        created() {
            setInterval(this.getVisitantesOnline, 1000)
        }
    }
    
</script>

