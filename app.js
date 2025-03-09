//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
let listaDeIndicesSorteados = [];

/**
 * Validates the input name.
 *
 * @param {string} nome - The name to be validated.
 * @returns {boolean} - Returns true if the name is a valid string without numbers and not empty, otherwise false.
 */
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

/**
 * Validates the given list for the draw.
 *
 * @param {Array} lista - The list of participants.
 * @returns {boolean} - Returns true if the list is not empty, otherwise false.
 */
function validarSorteio(lista) {
    if (lista.length === 0) {
        return false;
    }
    return true;
}

/**
 * Updates the list of names displayed in the HTML element with the ID 'listaAmigos'.
 * Clears the current list and appends each name from the global `listaDeNomes` array as a list item.
 */
function atualizarListaDeNomes() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    listaDeNomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaHTML.appendChild(li);
    });
}

/**
 * Adiciona um nome à lista de amigos secretos.
 * 
 * Esta função obtém o valor do campo de entrada, valida a entrada e, se válida, 
 * adiciona o nome à lista de nomes. Em seguida, limpa o campo de entrada e 
 * atualiza a lista de nomes exibida.
 * 
 * @function
 * @name adicionarAmigo
 */
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (!validarEntrada(nome)) {
        alert('Por favor, insira um nome.');
        return;
    }else{
        listaDeNomes.push(nome);
    }
    console.log(listaDeNomes);
    nome = document.querySelector('input');
    nome.value = '';
    atualizarListaDeNomes();
}

/**
 * Sorts a random friend from the list of names and displays the result.
 * Disables the "adicionar" button during the process.
 * If the list of names is empty, alerts the user to add at least one friend.
 * If all friends have been sorted, disables the "sortear" button and logs the completion.
 * Ensures that the same friend is not sorted more than once.
 * Updates the result element with the name of the sorted friend.
 */
function sortearAmigo(){
    document.getElementById('adicionar').setAttribute('disabled', true);
    if (!validarSorteio(listaDeNomes)) {
        alert('Por favor, adicione pelo menos um amigo para sortear.');
        return;
    }else{
        let indice = parseInt(Math.random() * listaDeNomes.length);
        let quantidadeDeAmigosSorteados = listaDeIndicesSorteados.length;
        if (quantidadeDeAmigosSorteados == listaDeNomes.length) {
            document.getElementById('adicionar').setAttribute('disabled', false);
            console.log('Sorteio finalizado');
            listaDeNomes = [];
            listaDeIndicesSorteados = [];
            return;
        }
        if (listaDeIndicesSorteados.includes(indice)) {
            return sortearAmigo();
        }else{
            listaDeIndicesSorteados.push(indice);
        }
        console.log(indice);
        console.log(listaDeNomes[indice]);
        document.getElementById('resultado').textContent = `Amigo sorteado: ${listaDeNomes[indice]}`;
    }
}