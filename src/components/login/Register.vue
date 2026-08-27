<template>
    <section class='register'>
        <div class='register__card'>
            <h1 class='register__logo'>JobList</h1>
            <p class='register__subtitle'>Crie sua conta profissional</p>

            <form class='register__form' @submit.prevent='handleSubmit'>
                <div class='register__field'>
                    <label for='name'>Nome Completo</label>
                    <div class='register__input-wrapper'>
                        <i class='bi bi-person' aria-hidden='true'></i>
                        <input
                            id='name'
                            v-model='form.name'
                            type='text'
                            placeholder='Seu nome completo'
                            required
                        >
                    </div>
                </div>

                <div class='register__field'>
                    <label for='email'>Email</label>
                    <div class='register__input-wrapper'>
                        <i class='bi bi-envelope' aria-hidden='true'></i>
                        <input
                            id='email'
                            v-model='form.email'
                            type='email'
                            placeholder='seu@email.com'
                            required
                        >
                    </div>
                </div>

                <div class='register__field'>
                    <label for='password'>Senha</label>
                    <div class='register__input-wrapper'>
                        <i class='bi bi-lock' aria-hidden='true'></i>
                        <input
                            id='password'
                            v-model='form.password'
                            type='password'
                            placeholder='••••••••'
                            required
                        >
                    </div>
                </div>

                <div
                    class='register__field'
                    :class='{ "register__field--error": showPasswordMismatch }'
                >
                    <label for='confirmPassword'>Confirmar Senha</label>
                    <div class='register__input-wrapper'>
                        <i class='bi bi-shield-check' aria-hidden='true'></i>
                        <input
                            id='confirmPassword'
                            v-model='form.confirmPassword'
                            type='password'
                            placeholder='••••••••'
                            required
                            @blur='touchedConfirm = true'
                        >
                    </div>
                    <span v-if='showPasswordMismatch' class='register__field-error'>
                        As senhas não coincidem.
                    </span>
                </div>

                <label class='register__checkbox'>
                    <input v-model='form.acceptedTerms' type='checkbox' required>
                    Aceito os
                    <router-link to='/termos'>Termos de Uso</router-link>
                    e
                    <router-link to='/privacidade'>Política de Privacidade</router-link>.
                </label>

                <button type='submit' class='register__submit'>
                    Criar minha conta
                    <i class='bi bi-arrow-right' aria-hidden='true'></i>
                </button>
            </form>

            <p class='register__footer-text'>
                Já tenho uma conta?
                <router-link to='/login'><strong>Fazer login</strong></router-link>
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'RegisterView',

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    acceptedTerms: false
                },
                touchedConfirm: false
            }
        },

        computed: {
            showPasswordMismatch() {
                return (
                    this.touchedConfirm &&
                    this.form.confirmPassword &&
                    this.form.password !== this.form.confirmPassword
                )
            }
        },

        methods: {
            handleSubmit() {
                if (this.form.password !== this.form.confirmPassword) {
                    this.touchedConfirm = true
                    return
                }
                this.$emit('register', { ...this.form })
            }
        }
    }
</script>