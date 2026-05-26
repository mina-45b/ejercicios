
let numero = 0;

let numeroUsuario = document.getElementById('numero');

numero = parseInt(prompt("Introduce un número"));
numeroUsuario.innerHTML = numero;

for (i = 2; i < numero + 1; i+=2){

    const p = document.createElement("p");
    const strong = document.createElement("strong");

    p.innerText = "Número par: ";
    p.id = 'par';

    document.getElementById('content').appendChild(p);
    p.appendChild(strong);

    strong.innerHTML = i;
    console.log(i);
}
