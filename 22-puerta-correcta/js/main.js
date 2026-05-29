const numero = function() {
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
    let vive = true;
    let destino = "";

    const aleatorio = numero();

    if(numeroUsuario === aleatorio) {
        alert("Correcto, puedes entrar");
        destino = "entrado";
        vive = true;
    } else {
        alert("Ohh!, has muerto");
        destino = "muerto";
        vive = false;
    }

    //Retornar una expresion de funcion en un objeto aleatorio : numero()
    return {vive, numeroUsuario, destino, aleatorio}
}

function iniciar() {

    const numPuerta = document.getElementById('numero');
    const correcta = document.getElementById('correcta');
    const destino = document.getElementById('destino');

    let resultado = comprobarNumero();

    numPuerta.textContent = resultado.numeroUsuario;
    console.log(`puerta usuario ${resultado.numeroUsuario}`);
    correcta.textContent = resultado.aleatorio;
    console.log(`puerta correcta ${resultado.aleatorio}`);
    correcta.style.color = 'var(--mint)';

    destino.textContent = resultado.destino;
    if(resultado.destino == "muerto") {
        destino.style.color = 'var(--pink)';
    } else {
        destino.style.color = 'var(--mint)';
    }
}

iniciar();