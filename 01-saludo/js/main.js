let nombreUsuario = "";
let diaUsuario = "";

const nombre = document.getElementById('nombre');
const dia = document.getElementById('dia');

nombreUsuario = prompt("¿Cuál es tu nombre?", "Introduzca su nombre");
diaUsuario = prompt("¿Qué día es hoy?", "Introduzca el día de la semana");

console.log(nombreUsuario)

nombre.innerHTML = nombreUsuario;
dia.innerHTML = diaUsuario;