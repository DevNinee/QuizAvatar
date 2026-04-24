
const telaInicio = document.getElementById("inicio");
const telaQuiz = document.getElementById("quiz");
const telaResultado = document.getElementById("resultado");

const btnIniciar = document.getElementById("btnIniciar");
const btnReiniciar = document.getElementById("reiniciar");

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.querySelectorAll(".opcao");
const progressoEl = document.getElementById("progresso");


const elementoFinalEl = document.getElementById("elementoFinal");
const pontuacaoFinalEl = document.getElementById("pontuacaoFinal");
const descricaoEl = document.getElementById("descricao");
const imgResultado = document.getElementById("imgResultado");
const btnVoltarInicio = document.getElementById("btnVoltarInicio");

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
      { texto: "Com calma e estratégia", pontos: { agua: 3, terra: 2, fogo: 1, ar: 0 } },
      { texto: "Com força e determinação", pontos: { agua: 0, terra: 3, fogo: 3, ar: 0 } },
      { texto: "Com criatividade", pontos: { agua: 1, terra: 1, fogo: 1, ar: 3 } },
    ]
  },
  {
    pergunta: "Quando alguém te magoa profundamente, qual é o seu processo de cura?",
    opcoes: [
      { texto: "Ergo muralhas para me proteger enquanto lido com a dor.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Permito-me sentir tudo até que a tristeza flua para fora de mim.", pontos: { agua: 3, terra: 0, fogo: 1, ar: 2 } },
      { texto: "Procuro perdoar rapidamente para me libertar desse peso.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
    ]
  },
  {
    pergunta: "Qual qualidade te define?",
    opcoes: [
      { texto: "Adaptável", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Resistente", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Intenso", pontos: { agua: 1, terra: 0, fogo: 3, ar: 2 } },
    ]
  },
  {
    pergunta: "Qual destas falhas você tem mais dificuldade de aceitar em si mesmo?",
    opcoes: [
      { texto: "Minha tendência a fugir de compromissos e confrontos.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
      { texto: "Meu pavio curto quando estou sob pressão.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Minha teimosia e resistência em pedir ajuda.", pontos: { agua: 2, terra: 3, fogo: 1, ar: 0 } },
    ]
  },
  {
    pergunta: "Diante do caos absoluto, onde você encontra o seu eixo?",
    opcoes: [
      { texto: "Na conexão profunda com as pessoas que amo.", pontos: { agua: 3, terra: 1, fogo: 2, ar: 0 } },
      { texto: "Na rotina, no foco e na manutenção da ordem possível.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "No desapego mental, observando a situação de cima.", pontos: { agua: 0, terra: 2, fogo: 1, ar: 3 } },
    ]
  },
  {
    pergunta: "Como você lida com o medo do desconhecido?",
    opcoes: [
      { texto: "Avanço com tudo; a ação espanta o medo.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Aceito que não tenho controle e me deixo levar.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Me preparo exaustivamente e crio um plano sólido.", pontos: { agua: 2, terra: 3, fogo: 1, ar: 0 } },
    ]
  },
  {
    pergunta: "Se você tivesse um guia animal no mundo Avatar, qual seria a essência dessa conexão?",
    opcoes: [
      { texto: "Um parceiro destemido e feroz, que impulsione minha coragem (ex: Dragão).", pontos: { agua: 0, terra: 2, fogo: 3, ar: 1 } },
      { texto: "Um companheiro livre e veloz, que me guie pelos ventos (ex: Bisão Voador).", pontos: { agua: 1, terra: 2, fogo: 0, ar: 3 } },
      { texto: "Um guardião leal e calmo, que seja meu porto seguro (ex: Cão-urso Polar ou Texugo).", pontos: { agua: 3, terra: 2, fogo: 1, ar: 0 } },
    ]
  },
  {
    pergunta: "Você prefere:",
    opcoes: [
      { texto: "Planejar", pontos: { agua: 3, terra: 1, fogo: 2, ar: 0 } },
      { texto: "Construir", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
      { texto: "Improvisar com leveza", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Que tipo de guerreiro você seria?",
    opcoes: [
      { texto: "Um estrategista sábio", pontos: { agua: 3, terra: 0, fogo: 2, ar: 1 } },
      { texto: "Um guerreiro inabalável", pontos: { agua: 2, terra: 3, fogo: 0, ar: 1 } },
      { texto: "Um espírito livre", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Quando tudo acabar, como você gostaria de ser lembrado?",
    opcoes: [
      { texto: "Como alguém que curou feridas e trouxe união.", pontos: { agua: 3, terra: 2, fogo: 0, ar: 1 } },
      { texto: "Como alguém cuja paixão e feitos mudaram a história.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Como alguém de espírito livre que inspirou paz e alegria.", pontos: { agua: 2, terra: 1, fogo: 0, ar: 3 } },
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
  pontuacaoFinalEl.innerText = `Pontuação final: ${pontuacao[resultado]} pontos`;

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

btnVoltarInicio.addEventListener("click", () => {
  pontuacao = { agua: 0, terra: 0, fogo: 0, ar: 0 };
  perguntaAtual = 0;

  telaQuiz.classList.remove("ativa");
  telaInicio.classList.add("ativa");
});
