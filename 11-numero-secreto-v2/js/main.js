
function juego(ronda) {
    let numeroSecreto =   Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(numeroSecreto);

    let p = document.createElement("p");
    document.getElementById('content').appendChild(p);

    p.textContent = "Ronda "+ ronda +": ";

    let strong = document.createElement("strong");
    p.appendChild(strong);


    let intentos = 3;
    for(intentos; intentos > 0; intentos--){
    
        alert("Tienes " + intentos + "/3 intentos");
    
       let numeroUsuario =  parseInt(prompt("¿Cuál es el número secreto?"));
       console.log(numeroUsuario);
    
    
       if(numeroUsuario === numeroSecreto) {
        alert("Correcto, el numero secreto es: " + numeroSecreto);


        strong.style.color = 'var(--mint)';
        strong.textContent = "¡HAS GANADO!";
        break;
       }
    
       if(intentos == 1) {
        alert("Lo siento, el numero secreto es: " + numeroSecreto);

        strong.style.color = 'var(--pink)';
        strong.textContent = "¡HAS PERDIDO!";
        console.log(intentos);
       }
    }
}

let ronda = 1;
let seguirJugando = true;
while(seguirJugando) {
    juego(ronda);
    seguirJugando = confirm("¿Quieres seguir jugando?");
    ronda++;
}

