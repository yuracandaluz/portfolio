<!-- README base — Lab 01 (DIAW, PUC Minas).
     Trechos marcados com «TODO» precisam ser preenchidos por você. -->

---

# 💼 Portfólio Profissional — Yura Andaluz

> [!NOTE]
> Website de portfólio profissional que apresenta minha trajetória, projetos, experiências e formas de contato de maneira moderna, responsiva e bilíngue (PT/EN).

<!-- TODO: criar uma logo/monograma na sua identidade visual e colocar em /src/assets/images -->

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/Status-Em_desenvolvimento-yellow?style=for-the-badge)
![Sprint](https://img.shields.io/badge/Sprint-01_Planejamento_e_prototipação-007ec6?style=for-the-badge)
![React](https://img.shields.io/badge/React-007ec6?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ec6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-007ec6?style=for-the-badge&logo=vite&logoColor=white)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Protótipos e Demonstração](#-protótipos-e-demonstração)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autora](#-autora)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Site publicado:** (https://yuraandaluz.vercel.app/)
* 🎨 **Protótipos no Figma:** _TODO: link do Figma_
* 📦 **Repositório:** [github.com/yuracandaluz/portfolio](https://github.com/yuracandaluz/portfolio)

---

## 📝 Sobre o Projeto

Este portfólio nasceu como o **Laboratório 01** da disciplina de **Desenvolvimento e Integração de Aplicações Web (DIAW)**, do curso de Engenharia de Software da PUC Minas.

- **Por que existe:** reunir em um só lugar quem eu sou, o que construí e como falar comigo.
- **Qual problema resolve:** recrutadoras e colegas conseguem conhecer minha trajetória e meus projetos em poucos cliques, sem precisar de um PDF.
- **Contexto:** acadêmico e profissional. Combina minha base de **~8 anos em design** com a formação em Engenharia de Software.
- **Diferencial:** identidade visual própria, conteúdo bilíngue e projetos com demonstração em funcionamento.

<!-- TODO: ajustar o texto com a sua voz. Esta seção é lida pelo professor. -->

---

## ✨ Funcionalidades Principais

- 🧭 **Navegação:** menu que leva às quatro seções do site.
- 👩‍💻 **Sobre Mim:** apresentação em **português e inglês** (formação, área de atuação, interesses e objetivos).
- 🗂️ **Projetos:** linha do tempo do mais antigo ao mais recente, com nome, descrição, tecnologias, link do GitHub e imagem/GIF.
- 🏢 **Experiências:** empresa/instituição, cargo ou atividade, período e descrição.
- 📨 **Contato:** ícones clicáveis (e-mail, WhatsApp, LinkedIn) e formulário com envio por e-mail.
- ✅ **Validações básicas** no formulário.
- 📱 **Design responsivo** e identidade visual coerente.

---

## 🛠 Tecnologias Utilizadas

> As tecnologias abaixo são as **previstas** na Sprint 01 e serão confirmadas até a entrega final.

### 💻 Front-end

* **Biblioteca:** React
* **Linguagem:** TypeScript
* **Build Tool:** Vite
* **Qualidade de código:** <!-- TODO: ESLint ou Oxlint (o que você escolheu) -->
* **Biblioteca de UI:** <!-- TODO: Mantine ou shadcn/ui -->
* **Roteamento:** React Router <!-- TODO: confirmar quando instalar -->
* **Formulário:** React Hook Form <!-- TODO: confirmar -->
* **E-mail:** EmailJS (`@emailjs/browser`) <!-- TODO: confirmar -->

### ⚙️ Infraestrutura & Ferramentas

* **Versionamento:** Git e GitHub
* **Prototipação:** Figma
* **Hospedagem:** Vercel
* **Runtime / pacotes:** Node.js e npm

### 📦 Dependências e bibliotecas

<!-- TODO: depois de instalar tudo, copie a lista do seu package.json (dependencies e devDependencies) e cole aqui em forma de tabela com as versões. -->

| Biblioteca | Para quê |
| :--- | :--- |
| `react`, `react-dom` | Interface por componentes |
| `typescript` | Tipagem estática |
| `vite` | Servidor de desenvolvimento e build |

---

## 🏗 Arquitetura

O projeto é uma **SPA (Single Page Application)** em React, **sem back-end próprio** nesta etapa.

- **Componentes reutilizáveis** (cabeçalho, rodapé, cards) compartilhados entre as páginas.
- **Páginas** para cada seção, com navegação por rotas.
- **Dados separados da interface:** projetos e experiências ficam em arquivos de dados e são renderizados por componentes, evitando repetir HTML.
- **Envio de e-mail** feito direto do front-end pelo EmailJS.

<!-- TODO: explique em 2 ou 3 linhas por que você escolheu essa arquitetura (é pergunta comum na apresentação final). -->

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** versão LTS (18 ou superior)
* **npm** (já vem com o Node.js)
* **Git**

### 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto (ele **não** deve ser commitado):

```
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

> No Vite, variáveis precisam começar com `VITE_` para ficarem disponíveis no código do front-end.

### 📦 Instalação

```bash
git clone git@github.com:yuracandaluz/portfolio.git
cd portfolio
npm install
```

### ⚡ Execução

```bash
npm run dev
```

O site fica disponível em **http://localhost:5173**.

### Outros comandos

| Comando | O que faz |
| :--- | :--- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão final otimizada em `/dist` |
| `npm run preview` | Serve localmente a versão de produção |
| `npm run lint` | Verifica a qualidade do código |

---

## 🚀 Deploy

O deploy será feito na **Vercel** (Sprint 03).

1. Importar o repositório do GitHub na Vercel.
2. Configurar as variáveis `VITE_EMAILJS_*` em *Project Settings → Environment Variables*.
3. A cada `push` na branch `main`, a Vercel gera uma nova versão automaticamente.

---

## 📂 Estrutura de Pastas

> Estrutura **inicial**, que deve evoluir durante as sprints.

```
.
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Imagens, GIFs, ícones e fontes
│   ├── components/         # Componentes reutilizáveis (Header, Footer, cards...)
│   ├── data/               # Dados de projetos e experiências
│   ├── pages/              # Sobre, Projetos, Experiências, Contato
│   ├── styles/             # Tema e estilos globais
│   ├── App.tsx             # Layout principal e rotas
│   └── main.tsx            # Ponto de entrada
├── index.html
├── package.json            # Dependências e scripts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

<!-- TODO: ajuste a árvore conforme o que realmente existir no seu projeto. -->

---

## 🎥 Protótipos e Demonstração

### 🎨 Wireframes (Figma — média fidelidade)

| Sobre Mim | Projetos |
| :---: | :---: |
| _TODO: imagem do wireframe_ | _TODO: imagem do wireframe_ |
| **Experiências** | **Contato** |
| _TODO: imagem do wireframe_ | _TODO: imagem do wireframe_ |

### 🌐 Protótipo inicial do front-end

_TODO: print da navegação e do layout base (cabeçalho, rodapé e área de conteúdo)._

<!-- Dica: guarde as imagens em /docs/images ou /src/assets e referencie com caminho relativo, ex.: ![Home](docs/images/home.png) -->

---

## 🔗 Documentações utilizadas

* 📖 [React](https://react.dev/)
* 📖 [Vite](https://vite.dev/guide/)
* 📖 [TypeScript](https://www.typescriptlang.org/docs/)
* 📖 [EmailJS](https://www.emailjs.com/docs/)
* 📖 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
<!-- TODO: adicionar a documentação da biblioteca de UI escolhida -->

---

## 👥 Autora

| 👤 Nome | 🐙 GitHub | 💼 LinkedIn | 📤 E-mail |
| :--- | :---: | :---: | :---: |
| Yura Andaluz | [yuracandaluz](https://github.com/yuracandaluz) | (https://www.linkedin.com/in/yurajyanay/) | yurajyanay@gmail.com |

---

## 🙏 Agradecimentos

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/): pelo apoio institucional e estrutura acadêmica.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni): pelos ensinamentos.
<!-- TODO: citar outras fontes e inspirações que você usou (é questão de integridade acadêmica). -->

---

## 📄 Licença

Este projeto é distribuído sob a **Apache 2.0**.

---
