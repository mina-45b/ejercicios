

function iniciar() {
    let numeroUsuario = 0;
    let box = document.getElementById('resultado-box');

    do {
        numeroUsuario = parseInt(prompt("Introduzca un númeor del 1 al 10", "solo números del 1 - 10"))
    
        if (numeroUsuario < 1 || numeroUsuario > 10) {
            alert("Número fuera de rango");
        }
    
    } while (numeroUsuario < 1 || numeroUsuario > 10);

    box.innerHTML = "";

    multiplicar(numeroUsuario, box);

    setTimeout(() => {
        let seguirMultiplicando = confirm("¿Quieres multiplicar otro número?");
        if(seguirMultiplicando) {
            iniciar();
        }

    },2000);

}

iniciar();


function multiplicar(numeroUsuario, box) {

    let p = document.createElement("p");
    p.textContent = "Tabla del " + numeroUsuario;
    p.style.textTransform = 'uppercase';

    box.appendChild(p);

    for (let i = 1; i <= 10; i++) {
        let p = document.createElement("p");

        p.textContent = numeroUsuario + " x " + i + " = ";

        let strong = document.createElement("strong");

        let resultado = numeroUsuario * i;
        strong.textContent = resultado;

        box.appendChild(p);
        p.appendChild(strong);

    }

}



