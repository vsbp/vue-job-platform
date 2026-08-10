<template>
    <header class="navbar navbar-expand-lg bg-body-tertiary">
        <nav class="container-fluid" aria-label="Navegação principal">
            <a class="navbar-brand" href="/">
                Vagas
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Abrir menu de navegação"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="/login"
                        >
                            Entrar
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="/cadastro"
                        >
                            Cadastrar
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>