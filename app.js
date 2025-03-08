//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome && nome.trim() !== '') {
        listaDeNomes.push(nome);
    } else {
        alert('Nome inválido. Por favor, forneça uma string.');
    }
    console.log(listaDeNomes);
    nome = document.querySelector('input');
    nome.value = '';
}