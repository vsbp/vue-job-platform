<template>
    <article class="recent-activity">
        <h3 class="recent-activity__title">Atividades recentes</h3>

        <ul v-if="activities.length" class="recent-activity__list">
            <li
                v-for="activity in activities"
                :key="activity.id"
                class="recent-activity__item"
            >
                <span
                    class="recent-activity__icon"
                    :class="`recent-activity__icon--${activity.type}`"
                >
                    <i :class="iconFor(activity.type)" aria-hidden="true"></i>
                </span>

                <div class="recent-activity__content">
                    <p class="recent-activity__text">
                        {{ textFor(activity) }}
                    </p>
                    <span class="recent-activity__time">
                        {{ activity.time }}
                    </span>
                </div>
            </li>
        </ul>

        <p v-else class="recent-activity__empty">
            Nenhuma atividade ainda.
        </p>
    </article>
</template>

<script>
export default {
    name: 'RecentActivity',

    props: {
        activities: {
            type: Array,
            default: () => [
                {
                    id: 1,
                    type: 'viewed',
                    company: 'TechFlow Inc.',
                    jobTitle: '',
                    time: 'Hoje, 14:30'
                },
                {
                    id: 2,
                    type: 'saved',
                    company: '',
                    jobTitle: 'Product Designer',
                    time: 'Ontem, 2:15'
                }
            ]
        }
    },

    methods: {
        iconFor(type) {
            const icons = {
                applied: 'bi bi-check-circle-fill',
                saved: 'bi bi-bookmark-fill',
                viewed: 'bi bi-eye-fill'
            }
            return icons[type] || 'bi bi-circle-fill'
        },

        textFor(activity) {
            if (activity.type === 'viewed') {
                return `Candidatura visualizada por `
            }
            if (activity.type === 'applied') {
                return `Você se candidatou para: `
            }
            return `Salvos `
        }
    }
}
</script>