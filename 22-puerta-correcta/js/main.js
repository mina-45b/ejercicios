let numero = function() {
    let numero = Math.floor(Math.random() * 2)+1;
    return numero;
}

function iniciar() {
    let numeroEscogido = parseInt(prompt("Elige una opción\n\n|·| Puerta 1 > Introduzca: 1\n|·| Puerta 2 > Introduzca: 2"));
}

iniciar();