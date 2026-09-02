<template>
    <section class="company-list">
        <div class="company-list__grind">
            <article
                v-for='company in companies'
                :key='company.id'
                class='company-card'
                role='button'
                tabindex='0'
                @click='goToCompany(company.id)'
                @keydown.enter='goToCompany(company.id)'
            >

                <div class="company-card__header">
                    <figure class="company-card__image">
                        <img
                            v-if='company.companyLogo'
                            :src='company.companyLogo'
                            :alt='`Logo da ${company.company}`'
                            loading='lazy'
                            decoding='async'
                            @error='handleImageError'
                        >
                        <span v-else class='company-card__initial'>
                            {{ companyInitial(company.company) }}
                        </span>
                    </figure>

                    <div class='company-card__heading'>
                        <h3 class='company-card__company-name'>
                            {{ company.company }}
                        </h3>
                        <p class='company-card__company-sector'>
                            {{ company.sector }}
                        </p>
                    </div>

                </div>

                <div class='company-card__meta'>
                    <span v-if='company.location' class='company-card__pill'>
                        <i class='bi bi-geo-alt' aria-hidden='true'></i>
                        {{ company.location }}
                    </span>

                    <span v-if='company.workModel' class='company-card__pill'>
                        <i class="bi bi-bag"></i>
                        5 Vagas abertas
                    </span>
                </div>

            </article>
        </div>
    </section>
</template>

<script>
    import companyPlaceholder from '../../assets/images/company/placeholder.png'

    export default {
        name: 'CompanyList',

        props: {
            companies: {
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

        methods: {
           goToCompany(id) {
                this.$router.push(`/empresa/${id}`)
            }, 

            companyInitial(company) {
                return company ? company.charAt(0).toUpperCase() : '?'
            },

            handleImageError(event) {
                event.target.src = this.companyPlaceholder
            },
        }
    }
    
</script>