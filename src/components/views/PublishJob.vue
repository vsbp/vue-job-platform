<template>
    <section class='publish-job'>
        <div class='publish-job__layout'>
            <div class='publish-job__main'>
                <header class='publish-job__header'>
                    <h1>Publicar Nova Vaga</h1>
                    <p>Preencha os detalhes abaixo para alcançar os melhores talentos.</p>
                    <p class='publish-job__legend'>
                        <span class='publish-job__required-mark'>*</span>
                        Campos obrigatórios
                    </p>
                </header>

                <p
                    v-if='showErrorSummary'
                    class='publish-job__error-summary'
                    role='alert'
                >
                    <i class='bi bi-exclamation-circle' aria-hidden='true'></i>
                    Preencha os campos obrigatórios destacados abaixo antes de publicar.
                </p>

                <div class='publish-job__card'>
                    <h2>Informações Básicas</h2>

                    <div class='publish-job__field' :class='{ "publish-job__field--error": errors.title }'>
                        <label for='title'>
                            Título da Vaga
                            <span class='publish-job__required-mark'>*</span>
                        </label>
                        <input
                            id='title'
                            v-model='form.title'
                            type='text'
                            placeholder='Ex: Engenheiro de Software Sênior'
                            @blur='validateField("title")'
                        >
                        <span v-if='errors.title' class='publish-job__field-error'>
                            {{ errors.title }}
                        </span>
                    </div>

                    <div class='publish-job__row'>
                        <div class='publish-job__field' :class='{ "publish-job__field--error": errors.company }'>
                            <label for='company'>
                                Empresa
                                <span class='publish-job__required-mark'>*</span>
                            </label>
                            <input
                                id='company'
                                v-model='form.company'
                                type='text'
                                placeholder='Nome da sua empresa'
                                @blur='validateField("company")'
                            >
                            <span v-if='errors.company' class='publish-job__field-error'>
                                {{ errors.company }}
                            </span>
                        </div>

                        <div class='publish-job__field'>
                            <label>Logo da Empresa</label>
                            <div class='publish-job__logo-upload'>
                                <div class='publish-job__logo-preview'>
                                    <img v-if='form.companyLogo' :src='form.companyLogo' alt='Preview do logo'>
                                    <i v-else class='bi bi-image' aria-hidden='true'></i>
                                </div>
                                <button type='button' @click='$refs.logoInput.click()'>
                                    Fazer Upload
                                </button>
                                <input
                                    ref='logoInput'
                                    type='file'
                                    accept='image/*'
                                    class='publish-job__logo-input'
                                    @change='handleLogoUpload'
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <div class='publish-job__card'>
                    <h2>Detalhes da Vaga</h2>

                    <div class='publish-job__field' :class='{ "publish-job__field--error": errors.description }'>
                        <label>
                            Descrição da Vaga
                            <span class='publish-job__required-mark'>*</span>
                        </label>
                        <div class='publish-job__editor'>
                            <div class='publish-job__editor-toolbar'>
                                <button type='button' title='Negrito' @click='format("bold")'>
                                    <i class='bi bi-type-bold' aria-hidden='true'></i>
                                </button>
                                <button type='button' title='Itálico' @click='format("italic")'>
                                    <i class='bi bi-type-italic' aria-hidden='true'></i>
                                </button>
                                <button type='button' title='Lista' @click='format("insertUnorderedList")'>
                                    <i class='bi bi-list-ul' aria-hidden='true'></i>
                                </button>
                            </div>
                            <div
                                ref='editor'
                                class='publish-job__editor-body'
                                contenteditable='true'
                                data-placeholder='Descreva as responsabilidades, requisitos e benefícios...'
                                @input='handleDescriptionInput'
                                @blur='validateField("description")'
                            ></div>
                        </div>
                        <span v-if='errors.description' class='publish-job__field-error'>
                            {{ errors.description }}
                        </span>
                    </div>

                    <div class='publish-job__row'>
                        <div class='publish-job__field' :class='{ "publish-job__field--error": errors.location }'>
                            <label for='location'>
                                Região
                                <span class='publish-job__required-mark'>*</span>
                            </label>
                            <select
                                id='location'
                                v-model='form.location'
                                @change='validateField("location")'
                            >
                                <option value=''>Selecione um Estado/Cidade</option>
                                <option v-for='state in locationOptions' :key='state' :value='state'>
                                    {{ state }}
                                </option>
                            </select>
                            <span v-if='errors.location' class='publish-job__field-error'>
                                {{ errors.location }}
                            </span>
                        </div>

                        <div class='publish-job__field' :class='{ "publish-job__field--error": errors.workModel }'>
                            <label for='workModel'>
                                Modelo de Trabalho
                                <span class='publish-job__required-mark'>*</span>
                            </label>
                            <select
                                id='workModel'
                                v-model='form.workModel'
                                @change='validateField("workModel")'
                            >
                                <option value=''>Selecione o modelo</option>
                                <option v-for='model in workModelOptions' :key='model' :value='model'>
                                    {{ model }}
                                </option>
                            </select>
                            <span v-if='errors.workModel' class='publish-job__field-error'>
                                {{ errors.workModel }}
                            </span>
                        </div>
                    </div>

                    <div class='publish-job__row'>
                        <div class='publish-job__field' :class='{ "publish-job__field--error": errors.contractType }'>
                            <label for='contractType'>
                                Tipo de Contrato
                                <span class='publish-job__required-mark'>*</span>
                            </label>
                            <select
                                id='contractType'
                                v-model='form.contractType'
                                @change='validateField("contractType")'
                            >
                                <option value=''>Selecione o tipo</option>
                                <option v-for='type in contractTypeOptions' :key='type' :value='type'>
                                    {{ type }}
                                </option>
                            </select>
                            <span v-if='errors.contractType' class='publish-job__field-error'>
                                {{ errors.contractType }}
                            </span>
                        </div>

                        <div class='publish-job__field' :class='{ "publish-job__field--error": errors.level }'>
                            <label for='level'>
                                Senioridade
                                <span class='publish-job__required-mark'>*</span>
                            </label>
                            <select
                                id='level'
                                v-model='form.level'
                                @change='validateField("level")'
                            >
                                <option value=''>Selecione o nível</option>
                                <option v-for='level in levelOptions' :key='level' :value='level'>
                                    {{ level }}
                                </option>
                            </select>
                            <span v-if='errors.level' class='publish-job__field-error'>
                                {{ errors.level }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class='publish-job__card'>
                    <h2>Remuneração (Opcional)</h2>

                    <div class='publish-job__row'>
                        <div class='publish-job__field'>
                            <label for='salaryMin'>Salário Mínimo</label>
                            <input
                                id='salaryMin'
                                v-model.number='form.salaryMin'
                                type='number'
                                min='0'
                                placeholder='R$ 0,00'
                            >
                        </div>

                        <div class='publish-job__field'>
                            <label for='salaryMax'>Salário Máximo</label>
                            <input
                                id='salaryMax'
                                v-model.number='form.salaryMax'
                                type='number'
                                min='0'
                                placeholder='R$ 0,00'
                            >
                        </div>
                    </div>
                </div>

                <div class='publish-job__actions'>
                    <button type='button' class='publish-job__draft-btn' @click='saveDraft'>
                        Salvar em Rascunho
                    </button>
                    <button type='button' class='publish-job__publish-btn' @click='publishJob'>
                        Publicar Vaga
                    </button>
                </div>
            </div>

            <aside class='publish-job__aside'>
                <div class='publish-job__drafts'>
                    <div class='publish-job__drafts-header'>
                        <h2>Rascunhos</h2>
                        <span class='publish-job__drafts-count'>{{ drafts.length }}</span>
                    </div>

                    <p v-if='!drafts.length' class='publish-job__drafts-empty'>
                        Nenhum rascunho salvo ainda.
                    </p>

                    <div
                        v-for='draft in drafts'
                        :key='draft.id'
                        class='publish-job__draft-item'
                    >
                        <div>
                            <strong>{{ draft.title || 'Sem título' }}</strong>
                            <p>Atualizado {{ draft.updatedAtLabel }}</p>
                        </div>
                        <div class='publish-job__draft-actions'>
                            <button type='button' title='Editar' @click='loadDraft(draft.id)'>
                                <i class='bi bi-pencil' aria-hidden='true'></i>
                            </button>
                            <button type='button' title='Excluir' @click='deleteDraft(draft.id)'>
                                <i class='bi bi-trash' aria-hidden='true'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </section>
</template>

<script>
    const DRAFTS_KEY = 'jobDrafts'
    const JOBS_KEY = 'userJobs'

    const emptyForm = () => ({
        id: null,
        title: '',
        company: '',
        companyLogo: '',
        description: '',
        location: '',
        workModel: '',
        contractType: '',
        level: '',
        salaryMin: null,
        salaryMax: null
    })

    const REQUIRED_FIELDS = {
        title: 'Informe o título da vaga.',
        company: 'Informe o nome da empresa.',
        description: 'Descreva a vaga antes de publicar.',
        location: 'Selecione a região da vaga.',
        workModel: 'Selecione o modelo de trabalho.',
        contractType: 'Selecione o tipo de contrato.',
        level: 'Selecione a senioridade.'
    }

    export default {
        name: 'PublishJob',

        data() {
            return {
                form: emptyForm(),
                errors: {},
                showErrorSummary: false,
                drafts: [],
                locationOptions: [
                    'São Paulo, SP',
                    'Rio de Janeiro, RJ',
                    'Belo Horizonte, MG',
                    'Porto Alegre, RS',
                    'Curitiba, PR',
                    'Remoto'
                ],
                workModelOptions: ['Remoto', 'Híbrido', 'Presencial'],
                contractTypeOptions: ['CLT', 'PJ', 'Estágio', 'Freelancer'],
                levelOptions: ['Júnior', 'Pleno', 'Sênior', 'Especialista']
            }
        },

        mounted() {
            this.loadDrafts()
        },

        methods: {
            handleLogoUpload(event) {
                const file = event.target.files[0]
                if (!file) {
                    return
                }
                const reader = new FileReader()
                reader.onload = () => {
                    this.form.companyLogo = reader.result
                }
                reader.readAsDataURL(file)
            },

            format(command) {
                document.execCommand(command, false, null)
                this.$refs.editor.focus()
            },

            handleDescriptionInput(event) {
                this.form.description = event.target.innerHTML
            },

            loadDrafts() {
                const stored = JSON.parse(localStorage.getItem(DRAFTS_KEY) || '[]')
                this.drafts = stored
                    .sort((a, b) => b.updatedAt - a.updatedAt)
                    .map((draft) => ({
                        ...draft,
                        updatedAtLabel: this.formatRelativeTime(draft.updatedAt)
                    }))
            },

            formatRelativeTime(timestamp) {
                const diffMs = Date.now() - timestamp
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

                if (diffDays <= 0) {
                    return 'hoje'
                }
                if (diffDays === 1) {
                    return 'há 1 dia'
                }
                return `há ${diffDays} dias`
            },

            saveDraft() {
                const stored = JSON.parse(localStorage.getItem(DRAFTS_KEY) || '[]')
                const id = this.form.id || Date.now()

                const draft = {
                    ...this.form,
                    id,
                    updatedAt: Date.now()
                }

                const index = stored.findIndex((item) => item.id === id)
                if (index >= 0) {
                    stored[index] = draft
                } else {
                    stored.push(draft)
                }

                localStorage.setItem(DRAFTS_KEY, JSON.stringify(stored))
                this.form.id = id
                this.loadDrafts()
            },

            loadDraft(id) {
                const stored = JSON.parse(localStorage.getItem(DRAFTS_KEY) || '[]')
                const draft = stored.find((item) => item.id === id)
                if (!draft) {
                    return
                }
                this.form = { ...draft }
                this.$nextTick(() => {
                    if (this.$refs.editor) {
                        this.$refs.editor.innerHTML = this.form.description || ''
                    }
                })
            },

            deleteDraft(id) {
                const stored = JSON.parse(localStorage.getItem(DRAFTS_KEY) || '[]')
                const filtered = stored.filter((item) => item.id !== id)
                localStorage.setItem(DRAFTS_KEY, JSON.stringify(filtered))
                this.loadDrafts()
            },

            validateField(field) {
                const value = this.form[field]
                const isEmpty = typeof value === 'string' ? !value.trim() : !value

                if (isEmpty) {
                    this.errors = { ...this.errors, [field]: REQUIRED_FIELDS[field] }
                } else {
                    const updatedErrors = { ...this.errors }
                    delete updatedErrors[field]
                    this.errors = updatedErrors
                }
            },

            validateForm() {
                Object.keys(REQUIRED_FIELDS).forEach((field) => this.validateField(field))
                return Object.keys(this.errors).length === 0
            },

            scrollToFirstError() {
                this.$nextTick(() => {
                    const firstError = document.querySelector('.publish-job__field--error')
                    firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                })
            },

            publishJob() {
                const isValid = this.validateForm()

                if (!isValid) {
                    this.showErrorSummary = true
                    this.scrollToFirstError()
                    return
                }

                this.showErrorSummary = false

                const jobs = JSON.parse(localStorage.getItem(JOBS_KEY) || '[]')
                const newJob = {
                    ...this.form,
                    id: Date.now(),
                    publishedAt: 'hoje'
                }
                jobs.push(newJob)
                localStorage.setItem(JOBS_KEY, JSON.stringify(jobs))

                if (this.form.id) {
                    this.deleteDraft(this.form.id)
                }

                this.form = emptyForm()
                if (this.$refs.editor) {
                    this.$refs.editor.innerHTML = ''
                }

                this.$router.push('/')
            }
        }
    }
</script>