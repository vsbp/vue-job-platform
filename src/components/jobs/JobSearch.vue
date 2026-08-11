<template>
    <section class="job-search">

        <form class="search-input" @submit.prevent>
            <div class="search-input__wrapper">
                <span class="search-input__icon" aria-hidden="true">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </span>
                <input
                    id="job-search"
                    type="search"
                    class="search-input__field"
                    placeholder="Ex: Desenvolvedor Front-end, Gerente de Projetos..."
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                >
                <button
                    class="search-input__button"
                    type="submit"
                >
                    Pesquisar
                </button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'JobSearch',

        props: {
            modelValue: {
                type: String,
                default: ''
            }
        },

        emits: ['update:modelValue']
    }
</script>
