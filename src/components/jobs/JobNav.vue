<template>
    <nav class="job-nav" aria-label="Navegação de vagas">
        <div class="job-nav__actions">
            <a
                href="/"
                class="job-nav__button"
            >
                Início
            </a>

            <button
                type="button"
                class="job-nav__button"
            >
                Atualizar vagas
            </button>

            <a
                href="/publicar-vaga"
                class="job-nav__button job-nav__button--primary"
            >
                Publicar vaga
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'JobNav'
    }

</script>

