const quiz = document.querySelector(".quiz");
const pergunta = quiz.querySelector(".pergunta");
const alternativas = quiz.querySelector(".alternativas");
const pontuacao = quiz.querySelector(".pontuacao");

const cabouquiz = document.querySelector(".cabouquiz")
const pontuacaofinal = cabouquiz.querySelector("h1.pontuacaofinal")
const btnrestart = cabouquiz.querySelector("button#restart")

btnrestart.addEventListener("click", main)

async function main() {
  const request = await fetch("assets/questoes.json");
  const quizData = await request.json();

  let PerguntaAtual = 0;
  let Pontos = 0;

  function carregarPergunta(nPergunta) {
    if (nPergunta >= quizData.length) {
      console.log('Todas as perguntas foram respondidas.');
      pontuacaofinal.innerHTML = `acertos: ${Pontos}/13`;
      quiz.classList.add('fim')
      setTimeout(() => {
        cabouquiz.classList.add('fim')
      }, 200);
      PerguntaAtual = 0;
      return;
    } 
    quiz.classList.remove('fim')
    cabouquiz.classList.remove('fim')

    pergunta.innerHTML = quizData[nPergunta].pergunta;
    alternativas.innerHTML = "";

    pontuacao.innerHTML = `acertos: ${Pontos}/13`;

    quizData[nPergunta].alternativas.forEach((alt) => (alternativas.innerHTML += `<button>${alt}</button>`))
  }

  alternativas.addEventListener("click", (ev) => {
    const altSelecionada = ev.target;
    const arrayAlternativas = [...alternativas.children];
    const numeroDaaltSelecionada = arrayAlternativas.indexOf(
      altSelecionada
    );
    if (numeroDaaltSelecionada === quizData[PerguntaAtual].resposta) {
      Pontos++;
    }

    carregarPergunta(++PerguntaAtual);
  });

  carregarPergunta(PerguntaAtual);
}

main();
