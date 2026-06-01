
const puertas = [
    {
        numero: 1,
        puerta: document.getElementById('puerta-1'),
        imagen: document.getElementById('imagen1'),
        otraPuerta: document.getElementById('puerta-2')
    },
    {
        numero: 2,
        puerta: document.getElementById('puerta-2'),
        imagen: document.getElementById('imagen2'),
        otraPuerta: document.getElementById('puerta-1')
    }
];

let numeroAleatorio;
let juegoActivo = true;

function jugar() {
    numeroAleatorio = generarNumero();
    console.log(numeroAleatorio);

    puertas.forEach(({numero, puerta, imagen, otraPuerta}) => {
        puerta.addEventListener('mouseenter', () => {
            if (juegoActivo) {
                imagen.src = 'assets/puerta-abierta.png';
            }
        });

        puerta.addEventListener('mouseleave', () => {
            if (juegoActivo) {
                imagen.src = 'assets/puerta-cerrada.png';
            }
        });

        puerta.addEventListener('click', () => {
            clickPuerta(numero, imagen, otraPuerta);
        });
    });
}

function clickPuerta(numero, imagen, otraPuerta) {
    juegoActivo = false;
    otraPuerta.style.display = 'none';

    if (numero === numeroAleatorio) {
        imagen.src = 'assets/ganar.png';

        setTimeout(() => {
            nuevaRonda();
        }, 2000);
    } else {
        imagen.src = 'assets/perder.png';
    }

    console.log(numero + " este es el numero de puerta");

    document.querySelector('#contenedor-puertas').classList.replace('puertas', 'puertas-nueva');
}

function nuevaRonda() {
    juegoActivo = true;
    numeroAleatorio = generarNumero();
    console.log(numeroAleatorio + " nuevo numero");

    puertas.forEach(({puerta, imagen}) => {
        puerta.style.display = 'block';
        imagen.src = 'assets/puerta-cerrada.png';
    });

    document.querySelector('#contenedor-puertas').classList.replace('puertas-nueva', 'puertas');
}


function generarNumero() {
    let numero = Math.floor(Math.random() * 2)+1;
    return numero;
}

jugar();

