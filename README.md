# Descubra seu Elemento em Nosso Quiz Avatar

> Projeto Web desenvolvido para a disciplina de Programação para Web.
> Inspirado no universo de *Avatar: A Lenda de Aang*.

## Descrição

Sistema Web interativo que permite ao usuário descobrir qual dos **quatro elementos do universo Avatar** mais combina com sua personalidade, por meio de um questionário de 10 perguntas com pontuação oculta.

Desenvolvido com **HTML**, **CSS** e **JavaScript** puro.

## Estrutura do Projeto

```
QuizAvatar/
├── index.html     
├── style.css       
├── script.js       
├── agua.png        
├── terra.png       
├── fogo.png         
├── ar.png           
└── elementos.png    
```

---

## Requisitos de JavaScript implementados

| Requisito | Como foi implementado |
|---|---|
| **Interação com DOM** | `getElementById`, `querySelectorAll`, `innerText`, `classList` |
| **Funções** | `carregarPergunta()`, `somarPontos()`, `calcularResultado()`, `mostrarResultado()` |
| **Arrow functions** | Usadas em todos os `addEventListener` |
| **Estruturas condicionais** | `if` em `calcularResultado()` para achar o vencedor |
| **Laços de repetição** | `for...in` em `somarPontos()`, `forEach` nos botões |
| **Listas** | Array `perguntas[]` com 10 objetos |
| **Objetos** | `pontuacao {}`, `pontos {}` por opção |
| **Orientação a Objetos** | `class Personagem` — pendente (Fabiana) |

---

##  Funcionalidades

### 1. Página Inicial
- Tela de boas-vindas com descrição do universo Avatar
- Botão **"Iniciar Quiz"** que inicia o questionário

### 2. Questionário
- **10 perguntas** com tema Avatar
- **3 opções** por pergunta (apenas uma pode ser selecionada)
- Pontuação **oculta para o usuário**, distribuída entre os 4 elementos
- Barra de progresso exibindo "Pergunta X de 10"

####  Sistema de Pontuação — Soma Constante
Cada opção distribui exatamente **6 pontos** entre os 4 elementos, garantindo equilíbrio matemático:

| Opção | Água | Terra | Fogo | Ar | Total |
|-------|------|-------|------|----|-------|
| Opção A | 3 | 2 | 0 | 1 | **6** |
| Opção B | 0 | 1 | 3 | 2 | **6** |
| Opção C | 2 | 0 | 1 | 3 | **6** |

> Método baseado em **Soma Constante** (psicometria), garantindo que todos os 4 elementos competem de forma justa.

### 3. Resultado
- Exibe o elemento com a **maior pontuação total**
- Mostra: nome do elemento, descrição, imagem representativa
- *Pendente:* exibir a **pontuação numérica** obtida
- Botão **"Refazer Quiz"** para reiniciar


## Os Quatro Elementos

| Elemento | Características |
|---|---|
| **Água** | Adaptável, calmo, estratégico |
| **Terra** | Forte, resistente, confiável |
| **Fogo** | Intenso, determinado, poderoso |
| **Ar** | Livre, criativo, leve |

## Como executar

1. Clone o repositório:
```bash
git clone https://github.com/DevNinee/QuizAvatar.git
```
2. Abra o arquivo `index.html` no navegador

> Não requer instalação de dependências — projeto 100% HTML/CSS/JS puro.
