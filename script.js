// Estado da lâmpada e quantidade de vezes que foi acesa
let ligada = false;
let vezes = 0;
const botao = document.querySelector("#interruptor");
const lampada = document.querySelector("#lampada");
const aviso = document.querySelector("#aviso");
const contador = document.querySelector("#contador");

botao.addEventListener("click", function () {
  ligada = !ligada;
  if (ligada) {
    lampada.textContent = "💡";
    aviso.textContent = "Luz acesa! A sua página está viva.";
    botao.textContent = "Desligar";
    document.body.classList.add("acesa");
    vezes = vezes + 1;
    contador.textContent = "Você acendeu a luz " + vezes + (vezes === 1 ? " vez." : " vezes.");
  } else {
    lampada.textContent = "🌑";
    aviso.textContent = "Luz apagada. Clique para acender.";
    botao.textContent = "Ligar";
    document.body.classList.remove("acesa");
  }
});
