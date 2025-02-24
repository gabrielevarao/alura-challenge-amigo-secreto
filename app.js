let nomeAmigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo(){

    let nome = document.querySelector('input').value;
    
    if (nome === ''){
        alert("Por favor, insira um nome.");

    } else {
        nomeAmigos.push(nome);
        listaAmigos.innerHTML = '';

        for (let i = 0; i < nomeAmigos.length; i++){
            let li = document.createElement('li');
            li.textContent = nomeAmigos[i];
            listaAmigos.appendChild(li);
        }

        document.querySelector('input').value = '';
    }
}

function sortearAmigo(){

    if (nomeAmigos.length === 0){
        alert("Por favor, insira um nome.");

    } else {
        let numSorteado = Math.floor(Math.random() * nomeAmigos.length);
        let amigoSorteado = nomeAmigos[numSorteado];
        let resultado = document.getElementById('resultado');
        resultado.textContent = `A pessoa sorteada foi: ${amigoSorteado}.`;
    }
}

