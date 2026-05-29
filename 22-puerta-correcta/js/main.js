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


function repetirJuego() {
    let puertasAcertadas = 0;
    let vive = true;
    

    while(vive) {

        vive = jugar();

        if(vive) {
            puertasAcertadas ++;
        } 
    }

    alert(`Has entrado en ${puertasAcertadas} puertas`)
    const entradas = document.createElement('p');

    entradas.textContent =`HAS ENTRADO EN ${puertasAcertadas} PUERTAS`;
    entradas.style.textAlign = "center";
    document.getElementById('content').appendChild(entradas);
}

function jugar() {

    const textoPuerta = document.createElement('p');
    const textoEleccion = document.createElement('p');
    const textoDestiono = document.createElement('p');

    textoPuerta.textContent = "Has elegido la puerta nº ";
    textoEleccion.textContent = "La puerta correcta es la nº ";
    textoDestiono.textContent = "Tu has ";

    const numPuerta = document.createElement('strong');
    const correcta = document.createElement('strong');
    const destino = document.createElement('strong');

    let numeroUsuario = pedirNumero();
    const aleatorio = numero();

    let vive = true;

    if(numeroUsuario === aleatorio) {
        alert("Correcto, puedes entrar");
        destino.textContent = "entrado";
        vive = true;
    } else {
        alert("Ohh!, has muerto");
        destino.textContent = "muerto";
        vive = false;
    }

    numPuerta.textContent = numeroUsuario;
    console.log(`puerta usuario ${numeroUsuario}`);
    correcta.textContent = aleatorio;
    console.log(`puerta correcta ${aleatorio}`);
    correcta.style.color = 'var(--mint)';

    destino.style.color = vive == true ? 'var(--mint)' : 'var(--pink)';

    textoPuerta.appendChild(numPuerta);
    textoEleccion.appendChild(correcta);
    textoDestiono.appendChild(destino);

    document.getElementById('content').appendChild(textoPuerta);
    document.getElementById('content').appendChild(textoEleccion);
    document.getElementById('content').appendChild(textoDestiono);
    document.getElementById('content').appendChild(document.createElement('hr'));
    document.getElementById('content').appendChild(document.createElement('br'));

    return vive; 
}

repetirJuego();


