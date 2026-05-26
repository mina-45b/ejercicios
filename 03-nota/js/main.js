
const notaUsuario = parseFloat(prompt("¿Cuál es la nota de tu examen?"));

let div = document.getElementById('content');

let strong = document.createElement("strong");

div.appendChild(strong);

if (notaUsuario < 0 || notaUsuario > 10) {
    strong.textContent = "Nota no válida"
    strong.style.color = "gray"
} else if (notaUsuario == 10) {
    strong.textContent = "Matricula de honor"
    strong.style.color = "gold"
} else if (notaUsuario > 5) {
    strong.textContent = "Aprobado"
    strong.style.color = "green"
} else if (notaUsuario == 5) {
    strong.textContent = "Por los pelos"
    strong.style.color = "orange"
} else if (notaUsuario < 5) {
    strong.textContent = "Suspenso"
    strong.style.color = "red"
}