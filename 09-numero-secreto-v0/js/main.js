let numeroSecreto = 0;


const comenzar = document.getElementById('start');
const box = document.getElementById('enter-box');

let nIntentos = document.getElementById('intentos');
const comprobar = document.getElementById('comprobar');

let intentos = 0;

comenzar.addEventListener('click',() => {
    box.style.display='flex';
    comenzar.style.display='none';

    intentos = 3;
    nIntentos.textContent = intentos + "/3";

    numeroSecreto =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log("El numero secreto es: " + numeroSecreto);
});


comprobar.addEventListener('click', () => {
    const inputUsuario =  document.getElementById('input');
    const valorInput = parseInt(inputUsuario.value);

    console.log(valorInput);

    if(valorInput === numeroSecreto) {
        alert("Felicidades has gando, el número secreto es: " + numeroSecreto);
        
        box.style.display='none';
        comenzar.style.display='block';

        
        intentos = 3;
        nIntentos.textContent = intentos + "/3";

        return;
    }

    intentos--;
    nIntentos.textContent = intentos + "/3";

    inputUsuario.value = "";

    console.log("Número de intentos:" + intentos);

    if (intentos === 0) {
        alert("Los intentos han acabado, el número secreto es: " + numeroSecreto);
        box.style.display='none';
        comenzar.style.display='block';

        intentos = 3;
        nIntentos.textContent = intentos + "/3";

    }

});



