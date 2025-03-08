//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
let listaDeIndicesSorteados = [];

function validarEntrada(nome) {
    if (typeof nome !== 'string') {
        return false;
    }
    if (nome.trim() === '') {
        return false;
    }
    if (/\d/.test(nome)) {
        return false;
    }
    return true;

}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (!validarEntrada(nome)) {
        alert('Digite um nome válido');
        return;
    }else{
        listaDeNomes.push(nome);
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