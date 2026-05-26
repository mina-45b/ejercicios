let primerNumero = parseInt(prompt("Introduzca un número:"));
let segundoNumero = parseInt(prompt("Introduzca otro número:"));

let resultado = document.createElement("p");

document.getElementById('content').appendChild(resultado);

if ((primerNumero % 2) == 0 && (segundoNumero % 2) == 0) {
    resultado.textContent = "Los dos números son pares"
} else if ((primerNumero % 2) == 0 || (segundoNumero % 2) == 0) {
    resultado.textContent = "Uno de los números es par"
} else {
    resultado.textContent = "Los dos números son impares"
}