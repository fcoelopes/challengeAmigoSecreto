//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
let listaDeIndicesSorteados = [];


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

function sortearAmigo(){
    document.getElementById('adicionar').setAttribute('disabled', true);
    let indice = parseInt(Math.random() * listaDeNomes.length);
    let quantidadeDeAmigosSorteados = listaDeIndicesSorteados.length;
    if (quantidadeDeAmigosSorteados == listaDeNomes.length) {
        document.getElementById('sortear').setAttribute('disabled', true);
        console.log('Sorteio finalizado');
        return;
    }
    if (listaDeIndicesSorteados.includes(indice)) {
        return sortearAmigo();
    }else{
        listaDeIndicesSorteados.push(indice);
    }
    console.log(indice);
    console.log(listaDeNomes[indice]);
}