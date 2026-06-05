
function pedirNumeros(fila) {

    numeroUsuario = parseInt(prompt(`Vamos a hacer 3 sumas\nIntroduzca el valor de la fila ${fila+1}`));

    if (isNaN(numeroUsuario)) {
        alert("Introduzca un valor válido");
    }

    return numeroUsuario;
}


const filas = [
    document.querySelectorAll('.row1'),
    document.querySelectorAll('.row2'),
    document.querySelectorAll('.row3')
];

let suma = 0;

filas.forEach((fila, filaIndex) => { // 0 - 1 - 2
    fila.forEach((columna, colIndex) => { //0 - 1 - 2 - 3 

        if (colIndex < 3) {
            const numero = pedirNumeros(filaIndex);
            columna.textContent = numero;
            suma += numero;
        } else {
            columna.textContent = suma;
            suma = 0;
        }
    });
});
