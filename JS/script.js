
const telaInicio = document.getElementById("inicio");
const telaQuiz = document.getElementById("quiz");
const telaResultado = document.getElementById("resultado");

const btnIniciar = document.getElementById("btnIniciar");
const btnReiniciar = document.getElementById("reiniciar");

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.querySelectorAll(".opcao");
const progressoEl = document.getElementById("progresso");


const elementoFinalEl = document.getElementById("elementoFinal");
const descricaoEl = document.getElementById("descricao");
const imgResultado = document.getElementById("imgResultado");

let pontuacao = {
  agua: 0,
  terra: 0,
  fogo: 0,
  ar: 0
};

let perguntaAtual = 0;


const perguntas = [
  {
    pergunta: "Como você resolve problemas?",
    opcoes: [
      { texto: "Com calma e estratégia", pontos: { agua: 3, terra: 2, fogo: 0, ar: 1 } },
      { texto: "Com força e determinação", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Com criatividade", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
    ]
  },
  {
    pergunta: "Qual ambiente você prefere?",
    opcoes: [
      { texto: "Praia ou mar", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Montanhas", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
      { texto: "Nos ceus, com o vento", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Qual qualidade te define?",
    opcoes: [
      { texto: "Adaptável", pontos: { agua: 3, terra: 0, fogo: 1, ar: 2 } },
      { texto: "Resistente", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Intenso", pontos: { agua: 1, terra: 0, fogo: 3, ar: 2 } },
    ]
  },
  {
    pergunta: "O que você faria em um conflito?",
    opcoes: [
      { texto: "Dialogar", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Enfrentar de frente", pontos: { agua: 0, terra: 2, fogo: 3, ar: 1 } },
      { texto: "Defender posição", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
    ]
  },
  {
    pergunta: "Qual cor você prefere?",
    opcoes: [
      { texto: "Azul", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Verde", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
      { texto: "Branco e dourado", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Qual seu estilo?",
    opcoes: [
      { texto: "Calmo", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Firme", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Explosivo", pontos: { agua: 1, terra: 0, fogo: 3, ar: 2 } },
    ]
  },
  {
    pergunta: "O que mais te atrai?",
    opcoes: [
      { texto: "Oceano", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Floresta", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
      { texto: "O vento e o céu", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Você prefere:",
    opcoes: [
      { texto: "Planejar", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Construir", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Improvisar com leveza", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
    ]
  },
  {
    pergunta: "Que tipo de guerreiro você seria?",
    opcoes: [
      { texto: "Um estrategista sábio", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Um guerreiro inabalável", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Um espírito livre", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Qual frase te define?",
    opcoes: [
      { texto: "Fluir é viver", pontos: { agua: 3, terra: 0, fogo: 1, ar: 2 } },
      { texto: "Ser firme é essencial", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Liberdade acima de tudo", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  }
];

function carregarPergunta() {
  let p = perguntas[perguntaAtual];

  perguntaEl.innerText = p.pergunta;

  opcoesEl.forEach((botao, index) => {
    botao.innerText = p.opcoes[index].texto;
  });

  progressoEl.innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
}

function somarPontos(pontosOpcao) {
  for (let elemento in pontosOpcao) {
    pontuacao[elemento] += pontosOpcao[elemento];
  }
}

function calcularResultado() {
  let maior = 0;
  let vencedor = "";

  for (let elemento in pontuacao) {
    if (pontuacao[elemento] > maior) {
      maior = pontuacao[elemento];
      vencedor = elemento;
    }
  }

  return vencedor;
}

function mostrarResultado() {
  telaQuiz.classList.remove("ativa");
  telaResultado.classList.add("ativa");

  let resultado = calcularResultado();

  elementoFinalEl.innerText = resultado.toUpperCase();

  const descricoes = {
    agua: "Você é adaptável, calmo e estratégico.",
    terra: "Você é forte, resistente e confiável.",
    fogo: "Você é intenso, determinado e poderoso.",
    ar: "Você é livre, criativo e leve."
  };

  descricaoEl.innerText = descricoes[resultado];
  const imagens = {
    agua: "../CSS/assets/agua.png",
    terra: "../CSS/assets/terra.png",
    fogo: "../CSS/assets/fogo.png",
    ar: "../CSS/assets/ar.png"
  };

  imgResultado.src = imagens[resultado];
}


btnIniciar.addEventListener("click", () => {
  telaInicio.classList.remove("ativa");
  telaQuiz.classList.add("ativa");
  carregarPergunta();
});

opcoesEl.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    let pontos = perguntas[perguntaAtual].opcoes[index].pontos;

    somarPontos(pontos);

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      carregarPergunta();
    } else {
      mostrarResultado();
    }
  });
});

btnReiniciar.addEventListener("click", () => {
  pontuacao = { agua: 0, terra: 0, fogo: 0, ar: 0 };
  perguntaAtual = 0;

  telaResultado.classList.remove("ativa");
  telaInicio.classList.add("ativa");
});
