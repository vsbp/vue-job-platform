<template>
    <section class='login'>
        <div class='login__card'>
            <h1 class='login__logo'>JobList</h1>
            <p class='login__subtitle'>Bem-vindo de volta. Informe seus dados.</p>

            <form class='login__form' @submit.prevent='handleSubmit'>
                <div class='login__field'>
                    <label for='email'>Email</label>
                    <div class='login__input-wrapper'>
                        <i class='bi bi-envelope' aria-hidden='true'></i>
                        <input
                            id='email'
                            v-model='form.email'
                            type='email'
                            placeholder='Digite seu email'
                            required
                        >
                    </div>
                </div>

                <div class='login__field'>
                    <label for='password'>Senha</label>
                    <div class='login__input-wrapper'>
                        <i class='bi bi-lock' aria-hidden='true'></i>
                        <input
                            id='password'
                            v-model='form.password'
                            type='password'
                            placeholder='Digite sua senha'
                            required
                        >
                    </div>
                </div>

                <div class='login__row'>
                    <label class='login__checkbox'>
                        <input v-model='form.rememberMe' type='checkbox'>
                        Lembrar de mim
                    </label>
                    <router-link to='/esqueci-senha' class='login__link'>
                        Esqueci minha senha
                    </router-link>
                </div>

                <button type='submit' class='login__submit'>
                    Entrar
                    <i class='bi bi-arrow-right' aria-hidden='true'></i>
                </button>

                <div class='login__divider'>
                    <span>ou</span>
                </div>

                <button type='button' class='login__google' @click='handleGoogleSignIn'>
                    <i class='bi bi-google' aria-hidden='true'></i>
                    Entrar com Google
                </button>
            </form>

            <p class='login__footer-text'>
                Não tem uma conta?
                <router-link to='/cadastro'>Criar conta</router-link>
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LoginView',

        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    rememberMe: false
                }
            }
        },

        methods: {
            handleSubmit() {
                this.$emit('login', { ...this.form })
            },

            handleGoogleSignIn() {
                this.$emit('login-google')
            }
        }
    }
</script>