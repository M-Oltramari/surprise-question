document.addEventListener("DOMContentLoaded", function () {
  const ball = document.querySelector(".cursor-ball");
  let mouseX = 0, mouseY = 0;
  let ballX = 0, ballY = 0;
  const speed = 0.1; // Velocidade de suavidade da bolinha

  function animate() {
    ballX += (mouseX - ballX) * speed;
    ballY += (mouseY - ballY) * speed;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  animate();
});

const container = document.querySelector(".container");
const cursorBall = document.querySelector(".cursor-ball");
const surpriseButton = document.getElementById("surprise-button");

// Lista de URLs para redirecionamento aleatório
const randomSites = [
  "https://longdogechallenge.com/",
  "https://puginarug.com/",
  "https://optical.toys/",
  "https://paint.toys/",
  "https://clicking.toys/flip-grid/neat-nine/3-holes/",
  "https://checkbox.toys/scale/",
  "https://binarypiano.com/",
  "https://cursoreffects.com/",
  "https://memory.toys/classic/easy/",
  "https://heeeeeeeey.com/",
  "https://mondrianandme.com/",
  "https://burymewithmymoney.com/",
  "https://eelslap.com/",
  "http://www.staggeringbeauty.com/",
  "https://www.movenowthinklater.com/",
  "https://hemansings.com/",
  "https://www.omfgdogs.com/#",
  "https://davidbowieisverydisappointedinyou.ytmnd.com/",
  "https://www.nyan.cat/"
];

// Adiciona o efeito de brilho ao entrar na área do container
container.addEventListener("mouseenter", () => {
  cursorBall.classList.add("illuminated");
});

// Remove o efeito de brilho ao sair da área do container
container.addEventListener("mouseleave", () => {
  cursorBall.classList.remove("illuminated");
});

document.getElementById("questionario").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const jogos = document.getElementById("jogos").value;
  const filmes = document.getElementById("filmes").value;
  const esportes = document.getElementById("esportes").value;

  const dados = {
    nome: nome,
    idade: idade,
    email: email,
    jogos: jogos,
    filmes: filmes,
    esportes: esportes,
  };

  console.log(dados);

  localStorage.setItem("dadosQuestionario", JSON.stringify(dados));

  enviarDadosParaServidor(dados);

  // Alterar o estilo da página após o envio do formulário
  document.body.style.backgroundColor = "#FFD1DC"; // Cor de fundo rosa pastel
  cursorBall.style.backgroundColor = "#FF69B4"; // Bolinha rosa

  // Ocultar o container do formulário e exibir o botão surpresa
  container.style.display = "none";
  surpriseButton.style.display = "block";
});

function enviarDadosParaServidor(dados) {
  fetch("https://seu-servidor.com/api/questionario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

// Adicionar evento de clique ao botão surpresa
surpriseButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * randomSites.length);
  window.open(randomSites[randomIndex], '_blank'); // Abre a URL em uma nova guia
});
