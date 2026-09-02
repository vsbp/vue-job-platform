<template>
    <section class='company-search'>
        <article>
            <h2>Empresas Parceiras</h2>
            <p>Explore a plataforma e encontre a empresa ideal para você trabalhar</p>

        </article>
        <form class='company-search-input' >
            <div class='company-search-input__wrapper'>
                <span class='company-search-input__icon' aria-hidden='true'>
                    <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                        />
                    </svg>
                </span>
                <input
                    id='company-search'
                    type='search'
                    class='company-search-input__field'
                    placeholder='Digite o nome da empresa'
                    maxlength='80'
                    autocomplete='off'
                >
                <button
                    class='company-search-input__button'
                    type='submit'
                >
                    Pesquisar
                </button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'CompanySearch',

    }
    
</script>