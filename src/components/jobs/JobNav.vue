<template>
    <section class="container py-4">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h2>Gestão de vagas</h2>
            </div>

            <nav aria-label="Navegação de vagas">
                <div class="d-flex gap-2">
                    <a href="/" class="btn btn-outline-dark">
                        Início
                    </a>

                    <button type="button" class="btn btn-outline-dark">
                        Atualizar vagas
                    </button>

                    <a href="/publicar-vaga" class="btn btn-primary">
                        Publicar vaga
                    </a>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'JobNav'
    }

</script>

