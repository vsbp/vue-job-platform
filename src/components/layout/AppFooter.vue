<template>
    <footer class='app-footer'>
        <div class='app-footer__content'>
            <div class='app-footer__top'>
                <div class='app-footer__brand'>
                    <span class='app-footer__logo'>JobList</span>
                    <p class='app-footer__tagline'>
                        Conectando talentos às melhores oportunidades do mercado.
                    </p>

                    <div class='app-footer__social'>
                        <a href='#' class='app-footer__social-link' aria-label='LinkedIn'>
                            <i class='bi bi-linkedin' aria-hidden='true'></i>
                        </a>
                        <a href='#' class='app-footer__social-link' aria-label='Instagram'>
                            <i class='bi bi-instagram' aria-hidden='true'></i>
                        </a>
                        <a href='#' class='app-footer__social-link' aria-label='X (Twitter)'>
                            <i class='bi bi-twitter-x' aria-hidden='true'></i>
                        </a>
                        <a href='#' class='app-footer__social-link' aria-label='GitHub'>
                            <i class='bi bi-github' aria-hidden='true'></i>
                        </a>
                    </div>
                </div>

                <nav class='app-footer__column'>
                    <h3 class='app-footer__heading'>Para Candidatos</h3>
                    <ul class='app-footer__list'>
                        <li><a href='#'>Buscar vagas</a></li>
                        <li><a href='#'>Criar currículo</a></li>
                        <li><a href='#'>Alertas de vagas</a></li>
                        <li><a href='#'>Dicas de carreira</a></li>
                    </ul>
                </nav>

                <nav class='app-footer__column'>
                    <h3 class='app-footer__heading'>Para Empresas</h3>
                    <ul class='app-footer__list'>
                        <li><a href='#'>Publicar vaga</a></li>
                        <li><a href='#'>Planos e preços</a></li>
                        <li><a href='#'>Banco de talentos</a></li>
                        <li><a href='#'>Central de ajuda</a></li>
                    </ul>
                </nav>

                <nav class='app-footer__column'>
                    <h3 class='app-footer__heading'>Empresa</h3>
                    <ul class='app-footer__list'>
                        <li><a href='#'>Sobre nós</a></li>
                        <li><a href='#'>Contato</a></li>
                        <li><a href='#'>Termos de uso</a></li>
                        <li><a href='#'>Privacidade</a></li>
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