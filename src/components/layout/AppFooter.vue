<template>
    <footer class='app-footer'>
        <div class='app-footer__content'>
            <div class='app-footer__top'>
                <div class='app-footer__brand'>
                    <router-link to='/' class='app-footer__logo'>Logo</router-link>
                    <p class='app-footer__tagline'>
                        Conectando talentos às melhores oportunidades do mercado.
                    </p>

                    <div class='app-footer__social'>
                        <router-link to='/' class='app-footer__social-link' aria-label='LinkedIn'>
                            <i class='bi bi-linkedin' aria-hidden='true'></i>
                        </router-link>
                        <router-link to='/' class='app-footer__social-link' aria-label='Instagram'>
                            <i class='bi bi-instagram' aria-hidden='true'></i>
                        </router-link>
                        <router-link to='/' class='app-footer__social-link' aria-label='X (Twitter)'>
                            <i class='bi bi-twitter-x' aria-hidden='true'></i>
                        </router-link>
                        <router-link to='/' class='app-footer__social-link' aria-label='GitHub'>
                            <i class='bi bi-github' aria-hidden='true'></i>
                        </router-link>
                    </div>
                </div>

                <nav class='app-footer__column'>
                    <h3 class='app-footer__heading'>Para Candidatos</h3>
                    <ul class='app-footer__list'>
                        <li><router-link to='/'>Buscar vagas</router-link></li>
                        <li><router-link to='/'>Criar currículo</router-link></li>
                        <li><router-link to='/'>Alertas de vagas</router-link></li>
                        <li><router-link to='/'>Dicas de carreira</router-link></li>
                    </ul>
                </nav>

                <nav class='app-footer__column'>
                    <h3 class='app-footer__heading'>Para Empresas</h3>
                    <ul class='app-footer__list'>
                        <li><router-link to='/'>Publicar vaga</router-link></li>
                        <li><router-link to='/'>Planos e preços</router-link></li>
                        <li><router-link to='/'>Banco de talentos</router-link></li>
                        <li><router-link to='/'>Central de ajuda</router-link></li>
                    </ul>
                </nav>

                <nav class='app-footer__column'>
                    <h3 class='app-footer__heading'>Empresa</h3>
                    <ul class='app-footer__list'>
                        <li><router-link to='/'>Sobre nós</router-link></li>
                        <li><router-link to='/'>Contato</router-link></li>
                        <li><router-link to='/'>Termos de uso</router-link></li>
                        <li><router-link to='/'>Privacidade</router-link></li>
                    </ul>
                </nav>
            </div>

            <div class='app-footer__bottom'>
                <p class='app-footer__copy'>
                    &copy; {{ currentYear }} JobList. Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter',

        computed: {
            currentYear() {
                return new Date().getFullYear()
            }
        }
    }
</script>