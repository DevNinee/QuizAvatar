
class Personagem {
  constructor(nome, descricao, imagem) {
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.pontos = 0;
  }

  adicionarPontos(valor) {
    this.pontos += valor;
  }
}


const elementos = {
  agua: new Personagem(
    "Água",
    "Como um Mestre da Água, sua força reside na adaptabilidade. Você entende que a vida é um fluxo constante e sabe contornar obstáculos com calma e paciência, mas possui a força devastadora das marés quando decide agir.",
    "../CSS/assets/agua.png"
  ),
  terra: new Personagem(
    "Terra",
    "Sua personalidade é inabalável como uma montanha. Você valoriza a estabilidade, a honestidade e a persistência. Para você, nenhum problema é grande demais se for enfrentado com uma postura firme e os pés bem plantados no chão.",
    "../CSS/assets/terra.png"
  ),
  fogo: new Personagem(
    "Fogo",
    "Você possui uma chama interior alimentada por paixão e uma vontade indomável. É um líder nato, movido por metas e desejos intensos. Sua energia inspira os outros, mas você deve aprender a equilibrar seu ímpeto para não se queimar.",
    "../CSS/assets/fogo.png"
  ),
  ar: new Personagem(
    "Ar",
    "Sua alma busca a liberdade e o desapego. Você é uma pessoa criativa, que prefere encontrar soluções pacíficas e olhar as situações por diferentes ângulos. Sua leveza de espírito permite que você voe alto, acima das preocupações triviais.",
    "../CSS/assets/ar.png"
  )
};

const telaInicio = document.getElementById("inicio");
const telaQuiz = document.getElementById("quiz");
const telaResultado = document.getElementById("resultado");
const btnIniciar = document.getElementById("btnIniciar");
const btnReiniciar = document.getElementById("reiniciar");
const btnVoltar = document.getElementById("btnVoltar");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.querySelectorAll(".opcao");
const progressoEl = document.getElementById("progresso");
const elementoFinalEl = document.getElementById("elementoFinal");
const pontuacaoFinalEl = document.getElementById("pontuacaoFinal");
const descricaoEl = document.getElementById("descricao");
const imgResultado = document.getElementById("imgResultado");

let perguntaAtual = 0;
let historicoPontos = [];

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
      { texto: "Ergo muralhas para me proteger.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "Permito-me sentir até que a dor flua.", pontos: { agua: 3, terra: 0, fogo: 1, ar: 2 } },
      { texto: "Procuro perdoar para me libertar.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
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
    pergunta: "Qual destas falhas você tem mais dificuldade de aceitar?",
    opcoes: [
      { texto: "Fugir de compromissos.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
      { texto: "Pavio curto sob pressão.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Teimosia em pedir ajuda.", pontos: { agua: 2, terra: 3, fogo: 1, ar: 0 } },
    ]
  },
  {
    pergunta: "Diante do caos, onde você encontra seu eixo?",
    opcoes: [
      { texto: "Na conexão com quem amo.", pontos: { agua: 3, terra: 1, fogo: 2, ar: 0 } },
      { texto: "Na rotina e no foco.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
      { texto: "No desapego mental.", pontos: { agua: 0, terra: 2, fogo: 1, ar: 3 } },
    ]
  },
  {
    pergunta: "Como você lida com o medo do desconhecido?",
    opcoes: [
      { texto: "Ação espanta o medo.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Aceito e me deixo levar.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
      { texto: "Crio um plano sólido.", pontos: { agua: 2, terra: 3, fogo: 1, ar: 0 } },
    ]
  },
  {
    pergunta: "Qual seria seu guia animal ideal?",
    opcoes: [
      { texto: "Um Dragão destemido.", pontos: { agua: 0, terra: 2, fogo: 3, ar: 1 } },
      { texto: "Um Bisão Voador livre.", pontos: { agua: 1, terra: 2, fogo: 0, ar: 3 } },
      { texto: "Um guardião leal e calmo.", pontos: { agua: 3, terra: 2, fogo: 1, ar: 0 } },
    ]
  },
  {
    pergunta: "Você prefere:",
    opcoes: [
      { texto: "Planejar", pontos: { agua: 3, terra: 1, fogo: 2, ar: 0 } },
      { texto: "Construir", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
      { texto: "Improvisar", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Que tipo de guerreiro você seria?",
    opcoes: [
      { texto: "Estrategista sábio", pontos: { agua: 3, terra: 0, fogo: 2, ar: 1 } },
      { texto: "Inabalável", pontos: { agua: 2, terra: 3, fogo: 0, ar: 1 } },
      { texto: "Espírito livre", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
    ]
  },
  {
    pergunta: "Como gostaria de ser lembrado?",
    opcoes: [
      { texto: "Como alguém que uniu as pessoas.", pontos: { agua: 3, terra: 2, fogo: 0, ar: 1 } },
      { texto: "Por feitos que mudaram a história.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
      { texto: "Por inspirar paz e alegria.", pontos: { agua: 2, terra: 1, fogo: 0, ar: 3 } },
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
  for (let chave in pontosOpcao) {
    if (elementos[chave]) {
      elementos[chave].adicionarPontos(pontosOpcao[chave]);
    }
  }
}

function mostrarResultado() {
  telaQuiz.classList.remove("ativa");
  telaResultado.classList.add("ativa");

  const vencedor = Object.values(elementos).reduce((prev, curr) => {
    return (curr.pontos > prev.pontos) ? curr : prev;
  });

  elementoFinalEl.innerText = vencedor.nome.toUpperCase();
  descricaoEl.innerText = vencedor.descricao;
  imgResultado.src = vencedor.imagem;

  pontuacaoFinalEl.innerText = `Sua afinidade total foi de ${vencedor.pontos} pontos!`;
}


btnIniciar.addEventListener("click", () => {
  telaInicio.classList.remove("ativa");
  telaQuiz.classList.add("ativa");
  carregarPergunta();
});

opcoesEl.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    let pontos = perguntas[perguntaAtual].opcoes[index].pontos;
    historicoPontos.push(pontos);
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
  Object.values(elementos).forEach(e => e.pontos = 0);
  perguntaAtual = 0;
  historicoPontos = [];
  telaResultado.classList.remove("ativa");
  telaInicio.classList.add("ativa");
});

btnVoltar.addEventListener("click", () => {
  if (perguntaAtual > 0) {
    perguntaAtual--;
    let pontosRemover = historicoPontos.pop();
    for (let chave in pontosRemover) {
      elementos[chave].pontos -= pontosRemover[chave];
    }
    carregarPergunta();
  } else {
    Object.values(nacoes).forEach(n => n.pontos = 0);
    historicoPontos = [];
    telaQuiz.classList.remove("ativa");
    telaInicio.classList.add("ativa");
  }
});
