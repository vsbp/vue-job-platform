<template>
    <section class='container py-4' aria-labelledby='platform-stats-title'>
        <h2 id='platform-stats-title' class='visually-hidden'>
            Estatísticas da plataforma
        </h2>

        <div class='row'>
            <div class='col-4'>
                <div class='h-100 p-5 rounded-3 border bg-light text-dark'>
                    <p>Vagas abertas</p>
                    <strong class='fs-2'>25</strong>
                </div>
            </div>

            <div class='col-4'>
                <div class='h-100 p-5 rounded-3 border bg-dark text-white'>
                    <p>Profissionais cadastrados</p>
                    <strong class='fs-2'>125</strong>
                </div>
            </div>

            <div class='col-4'>
                <div class='h-100 p-5 rounded-3 border bg-light text-dark'>
                    <p>Visitantes online</p>
                    <strong class='fs-2'>{{ visitantesOnline }}</strong>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'JobStats',

        data: () => ({
            visitantesOnline: 0
        }),
        methods: {
            getVisitantesOnline() {
                this.visitantesOnline = Math.floor(Math.random() * 101)
            }
        },
        created() {
            setInterval(this.getVisitantesOnline, 1000)
        }
    }
    
</script>

