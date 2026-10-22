# Visualizador de Perfil do GitHub

Aplicação web que consulta a API pública do GitHub e exibe informações de um perfil e seus repositórios.

## Funcionalidades

- Busca de perfis pelo nome de usuário do GitHub.
- Exibição do avatar, nome, biografia, seguidores e pessoas seguidas.
- Exibição dos 10 repositórios mais recentes retornados pela API, com quantidade de forks, estrelas, watchers e linguagem.
- Acesso ao repositório no GitHub ao clicar em um card.
- Busca pelo botão ou pressionando **Enter**.
- Layout responsivo para diferentes tamanhos de tela.

## Como executar

O projeto não exige instalação de dependências ou etapa de build. Como o JavaScript usa módulos ES6, abra a aplicação por meio de um servidor HTTP local:

1. Abra a pasta do projeto no Visual Studio Code.
2. Inicie um servidor local, por exemplo, com a extensão **Live Server**.
3. Abra o `index.html` pelo servidor.
4. Digite um nome de usuário do GitHub e clique em **Buscar** ou pressione **Enter**.

É necessário ter conexão com a internet para acessar a API do GitHub.

## Tecnologias

- HTML
- CSS
- JavaScript com módulos ES6
- GitHub REST API

## Estrutura do projeto

```text
.
├── index.html
├── src
│   ├── css
│   │   ├── animations.css
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   └── styles.css
│   └── js
│       ├── index.js
│       ├── search-controller.js
│       ├── services
│       │   └── github-api.js
│       └── ui
│           └── profile-view.js
└── README.md
```

## Organização do JavaScript

- `src/js/index.js`: ponto de entrada da aplicação.
- `src/js/search-controller.js`: controla a busca e trata a interação com a interface.
- `src/js/services/github-api.js`: realiza as requisições à API do GitHub.
- `src/js/ui/profile-view.js`: renderiza os dados do perfil e os cards de repositório.
