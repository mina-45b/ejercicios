function pedirNumero(medida) {
    let numeroUsuario = "";

    do {
        numeroUsuario = Number(prompt(`Introduzca el ${medida} del rectangulo:`));

        if(numeroUsuario === null || numeroUsuario === "" || isNaN(numeroUsuario)){
            alert("Introduzca únicamente números");
        }
    } while(numeroUsuario === null || numeroUsuario === "" || isNaN(numeroUsuario));

    return numeroUsuario;
}

let calcularArea = function(ancho, alto) {
    let resultado = ancho * alto;
    return resultado;
}

function iniciar() {

    const anchura = document.getElementById('ancho');
    const altura = document.getElementById('alto');

    const resultado = document.getElementById('resultado');

    let ancho = pedirNumero("ancho");
    let alto = pedirNumero("alto");

    anchura.textContent = ancho;
    altura.textContent = alto;

    resultado.textContent = calcularArea(ancho, alto);

}

iniciar();