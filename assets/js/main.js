const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const falta = document.getElementById("falta");
const so_mais = document.getElementById("so_mais");

updateBigCup();
changeBigCupText();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
  changeBigCupText();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}

function changeBigCupText() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  if (fullCups >= 5) {
    falta.style.display = "none";
    so_mais.style.display = "block";
  } else {
    falta.style.display = "block";
    so_mais.style.display = "none";
  }
}

// Alert BOXES - Início

function waterTime() {
  alert("Water time! Beba água!");
}

function waterTime2() {
  alert("H2O!");
}
function waterTime3() {
  alert("Passando pra te lembrar de algo muito importante...\nBeba água!");
}
function waterTime4() {
  alert("Hora de tomar uma...\n água! kkkk");
}
function waterTime5() {
  alert("Já bebeu?");
}
function waterTime6() {
  alert("Água água água!!");
}
function waterTime7() {
  alert("Quase lá! Bebe só mais um pouquinho!");
}
function waterTime8() {
  alert("Saideira, você consegue!");
}

setTimeout(waterTime, 3600000);
setTimeout(waterTime2, 7200000);
setTimeout(waterTime3, 10800000);
setTimeout(waterTime4, 10800000);
setTimeout(waterTime5, 14400000);
setTimeout(waterTime6, 18000000);
setTimeout(waterTime7, 21600000);
setTimeout(waterTime8, 25200000);

// Fim das Alert BOXES

// CASO EU QUEIRA ALERTA DE SOM, INSERIR ABAIXO

// function playWarning() {
//   document.getElementById("warning").play();
// }

// setTimeout(playWarning, 4000);

// Fim dos alertas de SOM

// javascript da LANDING-PAGE

// transição da Landing-Page para a Main-Page

const msg_container = document.getElementById("daily_msg_container");
const init_btn = document.getElementById("initialize_btn");
const bg_overlay = document.getElementById("bg_overlay");
const drink_container = document.getElementById("drink-water_container");

init_btn.addEventListener("click", function () {
  msg_container.classList.add("fade-out");
  setTimeout(function () {
    msg_container.classList.add("none");
    bg_overlay.classList.add("opacity40");
    drink_container.classList.add("zindex", "opacity100", "swing-in-top-fwd");
  }, 500);
});

// Randomly Select the Quote

const quotes = [
  "“Acredite em você. Trabalhe duro e não perca as esperanças no que faz seu coração vibrar.”",
  "“Defenda e promova suas convicções. Mantenha a consistência e aprimore seus movimentos.”",
  "“Um dia você vai ter que seguir tua intuição e não ligar para o que os outros estão falando.”",
  "“Vai chegar o momento que você NÃO vai negociar, porque NÃO É negociável.”",
  "“Vai chegar o minuto que você vai ter que dizer NÃO mesmo. E não é NÃO.”",
  "“Vai haver um segundo, aquele segundinho, que será o TEU segundo de fama.”",
  "“Quem se prepara, TRIUNFA!”",
  "“Conviva com pessoas melhores do que você.”",
  "“Você é a média das pessoas que convive.”",
  "“Quando estiver em dúvida, pergunte para você primeiro.”",
  "“A maneira como você encara a vida tem o poder de transformar o difícil em desafiador, o cansaço em impulso, a adversidade em progresso.”",
  "“Pessoas precisam de pessoas.”",
  "“Jogue o jogo do progresso. Seja 1% melhor todos os dias. Se estiver passando pelo inferno, não pare.”",
  "“Nada motiva mais do que o progresso.”",
  "“É levantar da cama e não apertar o soneca quando toca o despertador. É tomar banho gelado todos os dias. É vencer a batata frita hoje. É conseguir manter a disciplina por uma semana a mais.”",
  "“É terminar o livro que você começa. É resolver o pepino que você posterga. É guardar dinheiro, de uma vez por todas. É cumprir com a palavra e ficar com a sua família no fim de semana.”",
  "“É manter a palavra com seu cônjuge, por mais difícil que possa parecer. É parar com essa de “não tenho tempo para academia. É encontrar soluções, não problemas.”",
  "“É começar a partir de agora sem precisar estar motivado. É sair das encrencas que você mesmo se meteu. É colocar as prioridades nos seus devidos lugares.”",
  "“É entregar aquele projeto mesmo não estando perfeito. É parar de dramatizar quase tudo. É reclamar menos, bem menos.”",
  "“Vencer os outros é difícil, mas vencer a nós mesmos é mais ainda.”",
  "“Seja o seu herói. Comece por você. Vai ser demais. Você dá conta!”",
  "“O ego é seu inimigo.”",
  "“Cuide da sua primeira casa e olhe no espelho. Muitas das respostas que você tanto busca estarão reluzidas nele.”",
  "“O vitimismo te leva ao beco sem saída.”",
  "“Aquele que aprender a dizer NÃO vai quebrar seus recordes pessoais.”",
  "“Não sei é NÃO. Vou pensar é NÃO. Talvez é NÃO. Quem sabe é NÃO. Se não for um SIM óbvio, então é um NÃO óbvio.”",
  "“As 3 coisas mais importantes da sua vida: 1ª O dia que você nasce. 2ª O dia que você decide o que vai fazer com a sua vida. 3ª A pessoa que você escolhe pra te acompanhar nessa jornada.”",
  "“Ter um PLANO B não vai te levar a lugar algum.”",
  "“Se você esperar as condições perfeitas, NUNCA vai começar.”",
  "“Ideias não servem de NADA se não forem colocadas em prática.”",
  "“A mudança que você quer está na DECISÃO que você não toma.”",
  "“Se suas metas não tem um MÉTODO, elas são apenas sonhos.”",
  "“O objetivo da sua comunicação é fazer alguém agir. Não apenas te entender”",
  "“Nem todas as montanhas valem a escalada.”",
];

const quoteslen = quotes.length;

document.getElementById("daily_msg").innerHTML =
  quotes[Math.floor(Math.random() * quoteslen)];

// Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included):
