# Vagas Front

Aplicação web de gerenciamento e consulta de vagas de emprego, desenvolvida como projeto de estudo com **Vue.js** e **Sass (SCSS)**.

O projeto tem como objetivo praticar componentização, organização de estilos, passagem de dados entre componentes, consumo de dados simulados e construção de uma interface responsiva.

## Tecnologias

* Vue.js
* JavaScript
* Sass (SCSS)
* Bootstrap
* HTML5
* CSS3

## Estrutura do projeto

```text
src/
├── assets/
│   └── scss/
│       ├── abstracts/
│       │   ├── _variables.scss
│       │   └── _mixins.scss
│       │
│       ├── components/
│       │   ├── layout/
│       │   └── jobs/
│       │
│       └── main.scss
│
├── components/
│   ├── layout/
│   └── jobs/
│
├── mocks/
│
├── views/
│
├── App.vue
└── main.js
```

A organização busca manter uma separação clara entre **estrutura da aplicação, componentes, estilos e dados simulados**.

## Funcionalidades

* Listagem de vagas
* Busca de vagas
* Visualização de informações da vaga
* Indicadores de vagas e usuários
* Navegação entre páginas
* Publicação de vagas
* Layout responsivo

> Algumas funcionalidades estão sendo desenvolvidas gradualmente como parte do processo de estudo.

## Dados

Durante o desenvolvimento, os dados das vagas são simulados por meio de **mocks**, permitindo desenvolver a interface e a lógica da aplicação antes da integração com uma API real.

A estrutura foi pensada para facilitar uma futura substituição dos dados simulados por uma API.

## Instalação

Clone o projeto e instale as dependências:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run serve
```

A aplicação ficará disponível no endereço informado pelo Vue CLI no terminal.

## Build

Para gerar a versão de produção:

```bash
npm run build
```

## Lint

Para verificar e corrigir problemas de lint:

```bash
npm run lint
```

## Objetivos de estudo

Este projeto está sendo desenvolvido com foco em:

* Componentização com Vue.js
* Comunicação entre componentes através de `props`
* Organização e reutilização de estilos com Sass
* Estruturação de dados simulados
* Separação de responsabilidades
* Responsividade
* Boas práticas de HTML e acessibilidade
* Preparação da aplicação para futura integração com API

## Próximos passos

* Implementar busca e filtros de vagas
* Evoluir a navegação entre as páginas
* Implementar detalhes da vaga
* Adicionar estados de carregamento e ausência de resultados
* Substituir os mocks por uma API
* Adicionar testes
