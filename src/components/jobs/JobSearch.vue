<template>
    <section class="job-search">
        <div class="job-search__content">
            <h2>Busca de vagas</h2>

            <p>
                Encontre uma oportunidade ideal para o seu perfil profissional.
                Digite o cargo desejado.
            </p>

            <form class="search-input">
                <input
                    id="job-search"
                    type="search"
                    class="search-input__field"
                    placeholder="Ex: Desenvolvedor Front-end, Gerente de Projetos..."
                >

                <button
                    class="search-input__button"
                    type="submit"
                >
                    Pesquisar
                </button>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'JobSearch'
    }
</script>
