
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
        "Água (O Mediador Ágil)",
        "Sua força reside na adaptabilidade e empatia. Você entende que o mercado é um fluxo constante e sabe contornar obstáculos com calma. Excelente em Customer Success, RH e facilitação (Scrum Master), você une a equipe e apazigua crises com diplomacia.",
        "./assets/agua.png"
    ),
    terra: new Personagem(
        "Terra (O Executor Sólido)",
        "Sua postura no trabalho é inabalável. Você valoriza a estabilidade, a honestidade e a persistência. Para você, nenhum projeto é grande demais se houver um cronograma bem feito. Ideal para Operações, Financeiro e QA, você é a base confiável da empresa.",
        "./assets/terra.png"
    ),
    fogo: new Personagem(
        "Fogo (O Líder Visionário)",
        "Você é movido por ambição e foco em resultados. É um líder nato, impulsionado por metas e pelo desejo de crescimento. Excelente em Vendas, Marketing, Product Management ou como CEO. Sua energia inspira, mas cuide para não 'queimar' a equipe com a pressão.",
        "./assets/fogo.png"
    ),
    ar: new Personagem(
        "Ar (O Inovador Criativo)",
        "Sua mente busca a liberdade e a inovação. Você pensa 'fora da caixa', preferindo ambientes dinâmicos a rotinas rígidas. Brilhante em Design, UX/UI, Pesquisa e Desenvolvimento (P&D). Sua leveza e criatividade trazem o frescor necessário para produtos disruptivos.",
        "./assets/ar.png"
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
        pergunta: "Como você lida com um prazo muito apertado?",
        opcoes: [
            { texto: "Foco no cronograma e executo com disciplina.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
            { texto: "Delego tarefas e lidero um mutirão rápido.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
            { texto: "Flexibilizo o escopo e adapto as entregas.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
        ]
    },
    {
        pergunta: "Em uma reunião de brainstorming, você costuma:",
        opcoes: [
            { texto: "Trazer as ideias mais fora da caixa.", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
            { texto: "Anotar e viabilizar o que é prático.", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
            { texto: "Mediar para que todos consigam falar.", pontos: { agua: 3, terra: 2, fogo: 0, ar: 1 } },
        ]
    },
    {
        pergunta: "Qual o seu maior ponto forte em equipe?",
        opcoes: [
            { texto: "Manter a harmonia e o bom clima.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
            { texto: "Foco absoluto na entrega dos resultados.", pontos: { agua: 0, terra: 3, fogo: 3, ar: 0 } },
            { texto: "Inovação e visão de longo prazo.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
        ]
    },
    {
        pergunta: "Quando ocorre um conflito entre colegas, você:",
        opcoes: [
            { texto: "Atua como mediador para acalmar os ânimos.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
            { texto: "Intervém com autoridade para focar no trabalho.", pontos: { agua: 0, terra: 2, fogo: 3, ar: 1 } },
            { texto: "Sugere uma nova abordagem para o problema.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
        ]
    },
    {
        pergunta: "Seu ambiente de trabalho ideal é:",
        opcoes: [
            { texto: "Dinâmico, criativo e sem muita rotina.", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
            { texto: "Estruturado e com processos claros.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
            { texto: "Colaborativo e acolhedor.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
        ]
    },
    {
        pergunta: "Diante de um erro grave no projeto, sua primeira reação é:",
        opcoes: [
            { texto: "Assumir a liderança e focar na solução.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
            { texto: "Apoiar a equipe para não desmotivarem.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
            { texto: "Analisar a falha para criar regras seguras.", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
        ]
    },
    {
        pergunta: "Qual destas frases mais te representa?",
        opcoes: [
            { texto: "'O feito é melhor que o perfeito.'", pontos: { agua: 0, terra: 2, fogo: 3, ar: 1 } },
            { texto: "'A inovação distingue um líder.'", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
            { texto: "'Juntos vamos mais longe.'", pontos: { agua: 3, terra: 2, fogo: 0, ar: 1 } },
        ]
    },
    {
        pergunta: "Você prefere tarefas que envolvam:",
        opcoes: [
            { texto: "Planejamento e análise de dados.", pontos: { agua: 1, terra: 3, fogo: 2, ar: 0 } },
            { texto: "Design e criação de novos conceitos.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
            { texto: "Negociação e estratégia de mercado.", pontos: { agua: 0, terra: 1, fogo: 3, ar: 2 } },
        ]
    },
    {
        pergunta: "Na hora de dar um feedback difícil, você:",
        opcoes: [
            { texto: "É direto e reto, focado em melhoria.", pontos: { agua: 0, terra: 2, fogo: 3, ar: 1 } },
            { texto: "É empático e usa tato na comunicação.", pontos: { agua: 3, terra: 1, fogo: 0, ar: 2 } },
            { texto: "Mostra uma perspectiva diferente da situação.", pontos: { agua: 2, terra: 0, fogo: 1, ar: 3 } },
        ]
    },
    {
        pergunta: "Como você gostaria de ser lembrado na empresa?",
        opcoes: [
            { texto: "Pelos resultados consistentes que entregou.", pontos: { agua: 0, terra: 3, fogo: 2, ar: 1 } },
            { texto: "Por inovar e revolucionar o produto.", pontos: { agua: 1, terra: 0, fogo: 2, ar: 3 } },
            { texto: "Por desenvolver e apoiar as pessoas.", pontos: { agua: 3, terra: 2, fogo: 1, ar: 0 } },
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
        Object.values(elementos).forEach(n => n.pontos = 0);
        historicoPontos = [];
        telaQuiz.classList.remove("ativa");
        telaInicio.classList.add("ativa");
    }
});
