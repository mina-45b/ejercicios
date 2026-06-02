
function pedirNumero(veces) {
    let numeroUsuario = 0;

    do {

        numeroUsuario = parseInt(prompt(`Introduzca ${veces} números`));

        if(isNaN(numeroUsuario)) {
            alert("Introduzca un valor válido")
        } 

    }while(isNaN(numeroUsuario));

    return numeroUsuario;
}

let lista = new Array();

for(let i = 10; i > 0; i--) {
   lista.push(pedirNumero(i));
}

let resultadoNumeros = document.createElement('p');

resultadoNumeros.textContent = lista.join(', ');
console.log(lista.join(' ,'));

document.getElementById('content').appendChild(resultadoNumeros);

let numerosOrdenados = document.createElement('p');
let textoNumeros = document.createElement('p');

textoNumeros.textContent = "Los números en orden ascendente son:"

numerosOrdenados.textContent = lista.sort().join(', ');
console.log(lista.sort());

document.getElementById('content').appendChild(textoNumeros);
document.getElementById('content').appendChild(numerosOrdenados);