let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let resultado = document.getElementById('resultado');

primerNumero = parseFloat(prompt("Introduce un número"));
segundoNumero = parseFloat(prompt("Introduce otro número"));

n1.textContent = primerNumero;
n2.textContent = segundoNumero;

resultado.textContent = primerNumero + segundoNumero;

