
let numero = 0;

let numeroUsuario = document.getElementById('numero');

numero = parseInt(prompt("Introduce un número"));
numeroUsuario.innerHTML = numero;

for (i = 2; i < numero; i++){
    if((i % 2) == 0) {
        const p = document.createElement("p");
        document.getElementById('content').appendChild(p);
        p.innerText = "El número es: ";

        const strong = document.createElement("strong");
        p.appendChild(strong);
        
        strong.textContent = i;
        
        console.log(i);
    }
    
}
