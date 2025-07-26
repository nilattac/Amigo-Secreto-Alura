let amigos = [];

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value
    //console.log(amigoIngresado);

    if (amigoIngresado === ''){
        alert('Por favor, inserte un nombre');
    }else{
        amigos.push(amigoIngresado);
    }
    
    document.getElementById('amigo').value = '';
    console.log(amigos);
    listaAmigos(amigos);
}

function listaAmigos(lista) {
    for (let i = 0 ; i > lista.length ; i ++){
        document.createElement('li');
        
    }
    
}