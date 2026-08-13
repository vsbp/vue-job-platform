<template>
    <article class="profile-progress">
        <h3 class="profile-progress__title">Perfil Profissional</h3>
        <p class="profile-progress__subtitle">
            CComplete as informações do seu perfil para se destacar para os recrutadores.
        </p>

        <div class="profile-progress__row">
            <strong class="profile-progress__percentage">{{ percentage }}%</strong>
            <span class="profile-progress__level">{{ levelLabel }}</span>
        </div>

        <div class="profile-progress__bar">
            <div
                class="profile-progress__bar-fill"
                :style="{ width: `${percentage}%` }"
            ></div>
        </div>

        <button
            type="button"
            class="profile-progress__cta"
            @click="$emit('add-certifications')"
        >
            <i class="bi bi-plus-circle" aria-hidden="true"></i>
            Add Certifications
        </button>
    </article>
</template>

<script>
export default {
    name: 'ProfileProgress',

    props: {
        percentage: {
            type: Number,
            default: 0
        },
        levelLabel: {
            type: String,
            default: 'Iniciante'
        }
    },

    emits: ['add-certifications']
}
</script>