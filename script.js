// =================================================
// 1. ALTERNADOR DE TEXTOS
// =================================================
const textoAlternavel = document.getElementById('texto-alternavel');
const alternarTextoBtn = document.getElementById('alternar-texto-btn');

const textos = ["Este é o texto inicial.", "Este é o segundo texto.", "E este é o terceiro texto."];
let indiceTexto = 0;

alternarTextoBtn.addEventListener('click', function() {
    indiceTexto = (indiceTexto + 1) % textos.length;
    textoAlternavel.textContent = textos[indiceTexto];
});

// =================================================
// 2. ALTERNADOR DE IMAGENS
// =================================================
const imagem = document.getElementById('imagem');
const alternarImagemBtn = document.getElementById('alternar-imagem-btn');

const urlsImagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg"
];
let indiceImagem = 0;

alternarImagemBtn.addEventListener('click', function() {
    indiceImagem = (indiceImagem + 1) % urlsImagens.length;
    imagem.src = urlsImagens[indiceImagem];
});

// =================================================
// 3. ALTERNADOR DE TEMAS
// =================================================
const alternarTemaBtn = document.getElementById('alternar-tema-btn');
let temaAtual = 'claro';

alternarTemaBtn.addEventListener('click', function() {
    const body = document.body;
    if (temaAtual === 'claro') {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        alternarTemaBtn.textContent = 'Ativar Tema Claro';
        temaAtual = 'escuro';
    } else {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        alternarTemaBtn.textContent = 'Ativar Tema Escuro';
        temaAtual = 'claro';
    }
});
document.body.classList.add('tema-claro');

// =================================================
// 4. CONTADOR DE CLIQUES
// =================================================
const contadorDisplay = document.getElementById('contador');
const contadorBtn = document.getElementById('contador-btn');
let contador = 0;

contadorBtn.addEventListener('click', function() {
    contador++;
    contadorDisplay.textContent = contador;
});

// =================================================
// 5. BARRA DE PROGRESSO
// =================================================
const progressoAtual = document.getElementById('progresso-atual');
const avancarProgressoBtn = document.getElementById('avancar-progresso-btn');
let progresso = 0;

avancarProgressoBtn.addEventListener('click', function() {
    progresso += 1;
    if (progresso > 100) {
        progresso = 100;
    }
    progressoAtual.style.width = progresso + '%';
});

// =================================================
// 6. VALIDADOR DE SENHAS
// =================================================
const senhaInput = document.getElementById('senha-input');
const validarSenhaBtn = document.getElementById('validar-senha-btn');
const senhaFeedback = document.getElementById('senha-feedback');
const senhaCorreta = 'senha123';

validarSenhaBtn.addEventListener('click', function() {
    if (senhaInput.value === senhaCorreta) {
        senhaFeedback.textContent = 'Senha correta!';
        senhaFeedback.classList.remove('invalida');
        senhaFeedback.classList.add('valida');
    } else {
        senhaFeedback.textContent = 'Senha incorreta.';
        senhaFeedback.classList.remove('valida');
        senhaFeedback.classList.add('invalida');
    }
});

// =================================================
// 7. EXIBIDOR DE MENSAGENS
// =================================================
const msg1Btn = document.getElementById('msg1-btn');
const msg2Btn = document.getElementById('msg2-btn');
const mensagemExibida = document.getElementById('mensagem-exibida');

msg1Btn.addEventListener('click', function() {
    mensagemExibida.textContent = 'Olá! Esta é a primeira mensagem.';
});

msg2Btn.addEventListener('click', function() {
    mensagemExibida.textContent = 'Que bom ter você aqui! Esta é a segunda mensagem.';
});

// =================================================
// 8. QUIZ INTERATIVO
// =================================================
const quizDiv = document.getElementById('quiz');
const quizFinalizarBtn = document.getElementById('quiz-finalizar-btn');
const resultadoQuizDiv = document.getElementById('resultado-quiz');

const perguntas = [
    {
        pergunta: "Qual tag HTML é usada para criar um link?",
        opcoes: ["<a>", "<link>", "<href>"],
        resposta: "<a>"
    },
    {
        pergunta: "Qual linguagem de programação dá vida ao seu site?",
        opcoes: ["HTML", "CSS", "JavaScript"],
        resposta: "JavaScript"
    }
];

let respostasDoUsuario = {};

// Função para carregar as perguntas do quiz
function carregarQuiz() {
    perguntas.forEach((p, index) => {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta');
        perguntaDiv.innerHTML = `<h3>${p.pergunta}</h3>`;
        
        const opcoesDiv = document.createElement('div');
        opcoesDiv.classList.add('opcoes');

        p.opcoes.forEach(opcao => {
            const botaoOpcao = document.createElement('button');
            botaoOpcao.textContent = opcao;
            botaoOpcao.addEventListener('click', function() {
                respostasDoUsuario[index] = opcao;
                Array.from(opcoesDiv.children).forEach(btn => btn.classList.remove('correta', 'incorreta'));
                botaoOpcao.classList.add('correta');
            });
            opcoesDiv.appendChild(botaoOpcao);
        });
        perguntaDiv.appendChild(opcoesDiv);
        quizDiv.appendChild(perguntaDiv);
    });
}

// Função para finalizar o quiz e mostrar o resultado
quizFinalizarBtn.addEventListener('click', function() {
    let pontuacao = 0;
    resultadoQuizDiv.innerHTML = '';
    
    perguntas.forEach((p, index) => {
        const respostaUsuario = respostasDoUsuario[index];
        const feedbackP = document.createElement('p');
        feedbackP.classList.add('quiz-feedback');

        if (respostaUsuario === p.resposta) {
            pontuacao++;
            feedbackP.textContent = `Pergunta ${index + 1}: Correto!`;
            feedbackP.classList.add('valida');
        } else {
            feedbackP.textContent = `Pergunta ${index + 1}: Incorreto. A resposta correta é "${p.resposta}".`;
            feedbackP.classList.add('invalida');
        }
        resultadoQuizDiv.appendChild(feedbackP);
    });
    
    const pontuacaoTotal = document.createElement('h3');
    pontuacaoTotal.textContent = `Sua pontuação final é: ${pontuacao}/${perguntas.length}`;
    resultadoQuizDiv.prepend(pontuacaoTotal);
});

// Inicia o quiz ao carregar a página
carregarQuiz();