<template>
    <div class="job-filters">
        <div class="job-filters__chips">
            <input
                v-model="draft.title"
                type="text"
                class="job-filters__chip-input"
                placeholder="Title"
                @input="emitFilters"
            >

            <input
                v-model="draft.company"
                type="text"
                class="job-filters__chip-input"
                placeholder="Company"
                @input="emitFilters"
            >

            <select v-model="draft.state" class="job-filters__chip-select" @change="emitFilters">
                <option value="">State</option>
                <option v-for="state in options.states" :key="state" :value="state">
                    {{ state }}
                </option>
            </select>

            <select v-model="draft.workModel" class="job-filters__chip-select" @change="emitFilters">
                <option value="">Work Model</option>
                <option v-for="model in options.workModels" :key="model" :value="model">
                    {{ model }}
                </option>
            </select>

            <select v-model="draft.level" class="job-filters__chip-select" @change="emitFilters">
                <option value="">Seniority</option>
                <option v-for="level in options.levels" :key="level" :value="level">
                    {{ level }}
                </option>
            </select>

            <select v-model="draft.contractType" class="job-filters__chip-select" @change="emitFilters">
                <option value="">CLT/PJ</option>
                <option v-for="type in options.contractTypes" :key="type" :value="type">
                    {{ type }}
                </option>
            </select>

            <button
                type="button"
                class="job-filters__advanced-btn"
                :class="{ 'job-filters__advanced-btn--active': isOpen }"
                @click="isOpen = !isOpen"
            >
                <i class="bi bi-sliders" aria-hidden="true"></i>
                Advanced
            </button>
        </div>

        <div v-show="isOpen" class="job-filters__panel">
            <div class="job-filters__row">
                <div class="job-filters__field">
                    <label>TÍTULO</label>
                    <input
                        v-model="draft.title"
                        type="text"
                        placeholder="Ex: Frontend Engineer"
                        @input="emitFilters"
                    >
                </div>

                <div class="job-filters__field">
                    <label>EMPRESA</label>
                    <input
                        v-model="draft.company"
                        type="text"
                        placeholder="Ex: TechCorp"
                        @input="emitFilters"
                    >
                </div>

                <div class="job-filters__field">
                    <label>REGIÃO (ESTADOS)</label>
                    <select v-model="draft.state" class="job-filters__select" @change="emitFilters">
                        <option value="">Todos os Estados</option>
                        <option v-for="state in options.states" :key="state" :value="state">
                            {{ state }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="job-filters__row">
                <div class="job-filters__field">
                    <label>MODELO DE TRABALHO</label>
                    <div class="job-filters__pills">
                        <button
                            v-for="model in options.workModels"
                            :key="model"
                            type="button"
                            class="job-filters__pill"
                            :class="{ 'job-filters__pill--active': draft.workModel === model }"
                            @click="toggleSingle('workModel', model)"
                        >
                            {{ model }}
                        </button>
                    </div>
                </div>

                <div class="job-filters__field">
                    <label>CLT OU PJ</label>
                    <div class="job-filters__pills">
                        <button
                            v-for="type in options.contractTypes"
                            :key="type"
                            type="button"
                            class="job-filters__pill"
                            :class="{ 'job-filters__pill--active': draft.contractType === type }"
                            @click="toggleSingle('contractType', type)"
                        >
                            {{ type }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="job-filters__row">
                <div class="job-filters__field">
                    <label>NÍVEL</label>
                    <div class="job-filters__pills">
                        <button
                            v-for="level in options.levels"
                            :key="level"
                            type="button"
                            class="job-filters__pill"
                            :class="{ 'job-filters__pill--active': draft.level === level }"
                            @click="toggleSingle('level', level)"
                        >
                            {{ level }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="job-filters__actions">
                <button type="button" class="job-filters__clear" @click="clearFilters">
                    Limpar Filtros
                </button>
                <button type="button" class="job-filters__apply" @click="applyFilters">
                    Aplicar Filtros
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    const EMPTY_FILTERS = {
        title: '',
        company: '',
        state: '',
        workModel: '',
        contractType: '',
        level: ''
    }

    export default {
        name: 'JobFilters',

        props: {
            options: {
                type: Object,
                required: true
                // { states: [], workModels: [], contractTypes: [], levels: [] }
            }
        },

        emits: ['update:filters'],

        data() {
            return {
                isOpen: false,
                draft: { ...EMPTY_FILTERS }
            }
        },

        methods: {
            toggleSingle(field, value) {
                this.draft[field] = this.draft[field] === value ? '' : value
                this.emitFilters()
            },

            emitFilters() {
                this.$emit('update:filters', { ...this.draft })
            },

            applyFilters() {
                this.emitFilters()
                this.isOpen = false
            },

            clearFilters() {
                this.draft = { ...EMPTY_FILTERS }
                this.emitFilters()
            }
        }
    }
</script>

