
const notaUsuario = parseFloat(prompt("¿Cuál es la nota de tu examen?"));

let div = document.getElementById('content');

let strong = document.createElement("strong");

div.appendChild(strong);

if (notaUsuario < 0 || notaUsuario > 10) {
    strong.textContent = "Nota no válida"
    strong.style.color = "var(--lavender)"
} else if (notaUsuario == 10) {
    strong.textContent = "Matricula de honor"
    strong.style.color = "var(--yellow)"
} else if (notaUsuario > 5) {
    strong.textContent = "Aprobado"
    strong.style.color = "var(--mint)"
} else if (notaUsuario == 5) {
    strong.textContent = "Por los pelos"
    strong.style.color = "var(--sky)"
} else if (notaUsuario < 5) {
    strong.textContent = "Suspenso"
    strong.style.color = "var(--pink)"
}