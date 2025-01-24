//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let amigoEl = document.getElementById("amigo");

  if (!amigoEl.value) {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(amigoEl.value);
  amigoEl.value = "";

  listarAmigos()
}

function sortearAmigo() {
  if (!amigos.length) {
    alert("Sua lista de amigos está vazia.");
    return;
  }

  let numeroSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteadoEl = document.getElementById("resultado");
  amigoSorteadoEl.innerHTML = amigos[numeroSorteado];

}

function listarAmigos() {
  let listaAmigosEl = document.getElementById("listaAmigos");

  listaAmigosEl.innerHTML = "";

  amigos.forEach((amigo) => {
    listaAmigosEl.innerHTML += `<li>${amigo}</li>`;
  });


}
