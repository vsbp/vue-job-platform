<template>
    <header class='header'>
        <div class='header__wrapper'>
            <nav class='header__nav'>
                <router-link to='/' class='header__logo'>
                    Logo
                </router-link>

                <div class='header__menu'>
                    <router-link to='/' class='header__link'>Home</router-link>
                    <router-link to='/publicar-vaga' class='header__link'>Publicar Vaga</router-link>
                </div>

                <div class='header__actions'>
                    <button type='button' class='header__icon-btn' aria-label='Notificações'>
                        <i class='bi bi-bell' aria-hidden='true'></i>
                    </button>

                    <button type='button' class='header__icon-btn' aria-label='Configurações'>
                        <i class='bi bi-gear' aria-hidden='true'></i>
                    </button>

                    <div class='header__account' v-click-outside='closeAccountMenu'>
                        <button
                            type='button'
                            class='header__avatar'
                            aria-label='Minha conta'
                            @click='isAccountOpen = !isAccountOpen'
                        >
                            <img
                                v-if='avatarUrl'
                                :src='avatarUrl'
                                alt='Foto do usuário'
                                loading='lazy'
                                decoding='async'
                            >
                            <i v-else class='bi bi-person-circle' aria-hidden='true'></i>
                        </button>

                        <div v-if='isAccountOpen' class='header__account-menu'>
                            <a href='#' class='header__account-item'>
                                <i class='bi bi-person' aria-hidden='true'></i>
                                Minha conta
                            </a>
                            <a href='#' class='header__account-item'>
                                <i class='bi bi-gear' aria-hidden='true'></i>
                                Configurações
                            </a>
                            <hr class='header__account-divider'>
                            <a href='#' class='header__account-item header__account-item--danger'>
                                <i class='bi bi-box-arrow-right' aria-hidden='true'></i>
                                Sair
                            </a>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',

        props: {
            avatarUrl: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                isAccountOpen: false
            }
        },

        methods: {
            closeAccountMenu() {
                this.isAccountOpen = false
            }
        },

        directives: {
            clickOutside: {
                mounted(el, binding) {
                    el.__handleClickOutside__ = (event) => {
                        if (!(el === event.target || el.contains(event.target))) {
                            binding.value(event)
                        }
                    }
                    document.addEventListener('click', el.__handleClickOutside__)
                },
                unmounted(el) {
                    document.removeEventListener('click', el.__handleClickOutside__)
                }
            }
        }
    }
</script>