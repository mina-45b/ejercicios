let numero = function() {
    let numero = Math.floor(Math.random() * 2)+1;
    return numero;
}

function pedirNumero() {
    //Al hacer el prompt numeroEscogido solo puede ser isNaN, ya no es null ni ""
    let numeroEscogido = "";

    do {

        numeroEscogido = parseInt(prompt("Elige una opción\n\n|·| Puerta 1 > Introduzca: 1\n|·| Puerta 2 > Introduzca: 2"));

        if(isNaN(numeroEscogido)) {
            alert("Introduzca un valor válido")
        } else if(numeroEscogido != 1 && numeroEscogido != 2) {
            alert("Introduzca un número entre 1 y 2");
        }
    }while(isNaN(numeroEscogido) || (numeroEscogido != 1 && numeroEscogido != 2));

    return numeroEscogido;
}

function comprobarNumero() {
    let numeroUsuario = pedirNumero();

    if(numeroUsuario === numero()) {
        alert("Correcto, puedes entrar");
        return true;
    } else {
        alert("Ohh!, has muerto");
        return false;
    }
}

function iniciar() {
    let resultado = comprobarNumero();
}

iniciar();