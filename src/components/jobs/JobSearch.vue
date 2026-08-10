<template>
    <section class='container py-4'>
        <div class='row'>
            <div class='col'>
                <div class='h-100 p-5 bg-light border rounded-3'>
                    <h2>Busca de vagas</h2>
                    <p>Encontre uma oportunidade ideal para o seu perfil profissional. Digite o cargo desejado.</p>

                    <form class='search-input'>
                        <input
                            id='job-search'
                            type='search'
                            class='form-control'
                            placeholder='Ex: Desenvolvedor Front-end, Gerente de Projetos...'
                        >
                        <button class='btn btn-outline-dark' type='submit'>Pesquisar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'JobSearch'
    }
</script>
