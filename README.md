# Descubra seu Elemento — Quiz Avatar

> Projeto Web acadêmico que consiste em um Sistema Web interativo para o usuário descobrir qual personagem/elemento ele seria em um universo fictício (Avatar: A Lenda de Aang), atendendo a todos os requisitos propostos.

---

## Sobre o Projeto

Vamos supor que nossa equipe foi contrata por uma empresa de Jogos para desenvolver um Sistema Web em **HTML, CSS e JavaScript** com o objetivo de mapear a personalidade do usuário e vinculá-la a um de quatro possíveis resultados no universo de Avatar. O sistema é simples, funcional e atende a todos os critérios estabelecidos no escopo do projeto.

---

## Requisitos Técnicos de JavaScript Aplicados

O sistema faz uso de todas as obrigatoriedades técnicas exigidas:

| Requisito Exigido | Como foi implementado no sistema |
| :--- | :--- |
| **Interação com o DOM** | Utilização de `getElementById`, `querySelectorAll`, `innerText` e `.classList.add/remove` para atualização dinâmica de telas (ações, cliques e botões) sem a necessidade de recarregar a página. |
| **Uso de Funções** | Utilização de funções clássicas (`carregarPergunta`, `somarPontos`, `mostrarResultado`) para encapsular a lógica, e ampla adoção de **Arrow Functions** (`() =>`) nos escutadores de eventos. |
| **Estruturas Condicionais e Laços** | Estruturas `if/else` controlam o fluxo de navegação do quiz (decidindo se passa para a próxima pergunta ou exibe o resultado). Laços `forEach` iteram sobre os botões do DOM e laços `for...in` percorrem os objetos na distribuição de pontos. |
| **Uso de Listas e Objetos** | As opções do questionário são armazenadas em uma **Lista** (`Array` chamado `perguntas` contendo objetos). Utilizamos a lista `historicoPontos` (Array) para rastrear jogadas, e o objeto `elementos` agrupando as instâncias. |
| **Orientação a Objetos (POO)** | **Totalmente aplicado.** Foi criada a classe `Personagem` com o construtor gerenciando os atributos (`nome`, `descricao`, `imagem`, `pontos`) e o método `adicionarPontos()`. Todos os elementos do universo foram instanciados a partir dela. |

---

## Funcionalidades Implementadas

O projeto foi dividido de acordo com as 3 fases solicitadas:

### 1. Página Inicial
Apresenta uma tela inicial limpa com a descrição do universo fictício de *Avatar: A Lenda de Aang*.
- **Universo Fictício (1.1):** Adotamos o universo das Quatro Nações de Avatar.
- **Personagens criados:** Mestre da Água, Guerreiro de Terra, Mestre do Fogo e Nômade do Ar (totalizando 4 personagens, superando a exigência mínima de 3).

### 2. Questionário
A jornada principal do usuário, composta exatamente por **10 perguntas** temáticas.
- **Opções (2.1):** Cada pergunta possui um conjunto exato de **3 opções** de resposta. O usuário interage com os botões e seleciona apenas uma.
- **Pontuação Oculta (2.2):** Ao escolher uma opção, uma pontuação matemática pré-definida é distribuída de forma fracionada entre **todos** os personagens (garantindo balanceamento estatístico). *Exemplo (2.2.1.1): Uma opção pode pontuar 3 para Água, 2 para Terra, 1 para Fogo e 0 para Ar.* Essa dinâmica complexa é invisível para o usuário final.
- **Cálculo Automático (2.3):** O sistema processa tudo nos bastidores, percorrendo as chaves do objeto de pontos da opção selecionada e chamando o método `.adicionarPontos()` correspondente na classe instanciada.

### 3. Resultado Final
Ao responder a décima pergunta, o sistema utiliza o método de Array `.reduce()` para comparar todas as instâncias e declarar a grande vencedora.
- **Exibição (3.1):** O resultado muda a tela ativamente para apresentar o título do personagem vencedor, a quantidade final da **pontuação obtida**, a imagem representativa formatada em CSS e o texto de descrição do perfil.
- **Recomeçar (3.2):** Botão "Refazer Quiz" implementado. Ele restaura a pontuação de todos os objetos de volta para zero, limpa o histórico de arrays e exibe a tela de boas-vindas novamente.
- **[BÔNUS] Função Voltar:** Para enriquecer o projeto, adicionamos a opção de "Voltar" durante o quiz. O sistema utiliza a lógica de pilhas (método `.pop()` no array de histórico) para reverter perfeitamente a pontuação dada na última pergunta e retroceder a visualização.

---

## Estrutura de Arquivos

```text
QuizAvatar/
├── HTML/
│   └── index.html      # Estrutura semântica do layout e das telas "ativa/inativa"
├── CSS/
│   ├── style.css       # Design System (Variáveis, UI/UX)
│   └── assets/         # Imagens importadas para o resultado
└── JS/
    └── script.js       # Lógica central Orientada a Objetos, controle de estado e DOM
```

---

## Como Executar Localmente

1. Clone este repositório via terminal:
   ```bash
   git clone https://github.com/DevNinee/QuizAvatar.git
   ```
2. Navegue até o diretório `HTML` e abra o arquivo `index.html` em qualquer navegador web de sua preferência. 
