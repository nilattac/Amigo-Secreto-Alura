let amigos = [];
const lista = document.getElementById('listaAmigos')
const resultado = document.getElementById('resultado')

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value
    
    if (amigoIngresado === ''){
        alert('Por favor, inserte un nombre');
    }else{
        amigos.push(amigoIngresado);
    }
    
    document.getElementById('amigo').value = '';
    listaAmigos(amigos);
}

function listaAmigos(array) {
    resultado.innerHTML = "";
    lista.innerHTML = "";
    for (let i = 0 ; i < array.length ; i ++){
        const amigo = document.createElement('li');
        amigo.textContent = array[i];
        lista.appendChild(amigo);
    }
}

function sortearAmigo() {
    if (amigos.length > 0){
        let indexSorteado = (Math.floor(Math.random()*amigos.length));
        lista.innerHTML = "";
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indexSorteado]}`;
        amigos = []
    }
}