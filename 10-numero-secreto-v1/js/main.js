let numeroSecreto =   Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(numeroSecreto);

let strong = document.createElement("strong");
document.getElementById('content').appendChild(strong);

let intentos = 3;
for(intentos; intentos > 0; intentos--){

    alert("Tienes " + intentos + "/3 intentos");

   let numeroUsuario =  parseInt(prompt("¿Cuál es el número secreto?"));
   console.log(numeroUsuario);


   if(numeroUsuario === numeroSecreto) {
    alert("Correcto, el numero secreto es: " + numeroSecreto);
    strong.style.color = 'green';
    strong.textContent = "¡HAS GANADO!";
    break;
   }

   if(intentos == 1) {
    alert("Lo siento, el numero secreto es: " + numeroSecreto);
    strong.style.color = 'red';
    strong.textContent = "¡HAS PERDIDO!";
    console.log(intentos);
   }
}