## Projeto: Descubra seu Elemento no Universo Avatar

### Descrição do projeto web:

 Somos uma equipe que desenvolve jogos e iremos desenvolver um **Sistema Web** que permite ao jogador descobrir qual **elemento** ele domina no universo de *Avatar* (inspirado em *A Lenda de Aang*). Nosso sistema vai utilizar **HTML**, **CSS** e **JavaScript** para criar uma interface simples e funcional.

### Requisitos de JavaScript

O sistema deve fazer uso dos seguintes recursos:

- **Interação com o DOM** – recuperação e atualização de dados do HTML (cliques, botões, ações do usuário).
- **Funções** (tradicionais ou *arrow functions*).
- **Estruturas condicionais** e **laços de repetição**.
- **Listas** e **objetos**.
- **Orientação a objetos** – o sistema deve ser estruturado com classes/objetos.


## Universo Fictício: Avatar (Os Quatro Elementos)

Neste universo, existem quatro elementos principais: **Água**, **Terra**, **Fogo** e **Ar**. Cada elemento possui características, habilidades e filosofias próprias. O usuário responderá a um questionário para descobrir qual elemento mais combina com sua personalidade.

> **Mínimo de elementos**: 3 (mas utilizaremos 4 para melhor experiência).


## Funcionalidades do Sistema

### 1. Página Inicial

- Tela de boas-vindas com uma breve descrição do universo *Avatar*.
- Convite para o usuário participar do jogo e descobrir seu elemento dominante.
- Botão ou link para iniciar o questionário.

### 2. Questionário e regras.

- Composto por **10 perguntas**.
- Cada pergunta tem **3 opções de resposta** (Só pode uma opção por pergunta).
- Cada opção possui uma **pontuação oculta** para cada elemento (não visível ao usuário).

#### Exemplo de pontuação:

| Opção | Água | Terra | Fogo | Ar |
|-------|------|-------|------|----|
| Opção 1 | 3 | 2 | 1 | 0 |
| Opção 2 | 1 | 3 | 2 | 0 |
| Opção 3 | 2 | 1 | 3 | 0 |

> *A pontuação varia conforme a afinidade da resposta com cada elemento.*

- Ao final das 10 perguntas, o sistema **soma os pontos** de cada elemento com base nas respostas do usuário.

### 3. Resultado

- Exibe o **elemento com a maior pontuação**.
- Mostra também:
  - Pontuação final obtida para aquele elemento.
  - Nome do elemento (Água, Terra, Fogo ou Ar).
  - Breve descrição do elemento e suas características.
  - Uma **imagem** representativa do elemento.
- Oferece uma **opção para reiniciar o jogo** (redefinir respostas e começar novamente).


## Iremos seguir as seguintes regras:

- Criar um sistema **responsivo** e bonito visualmente.
-  A pontuação do cálculo de nosso jogo é feito em segundo plano, ou seja o jogador não vai ver durante o questionário.
- Nossa  estrutura vai ser orientada a objetos e deve organizar, as perguntas, opções, pontuações e o controle do jogo.
