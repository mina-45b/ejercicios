
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
let seguirJugando = true;
let puertasAbiertas = 0;
let conteoPuertas = document.getElementById('conteoPuertas');


function precargarImagenes() {
    const imagenes = [
        'assets/puerta-cerrada.png',
        'assets/puerta-abierta.png',
        'assets/ganar.png',
        'assets/perder.png'
    ];

    imagenes.forEach(src => {
        const imag = new Image();
        imag.src = src;
    });
}

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
        puertasAbiertas++;

        conteoPuertas.textContent = puertasAbiertas;

        setTimeout(() => {
            nuevaRonda();
        }, 2000);
    } else {
        imagen.src = 'assets/perder.png';

        setTimeout(() => {
            repetirJuego();
        }, 2000);
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


const contenedorPregunta = document.querySelector('.pregunta');
const contenedorPuertas = document.querySelector('#contenedor-puertas');
const contadorPuertas =  document.getElementById('abiertas');

const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');

btnSi.addEventListener('click', () => {
    contenedorPuertas.style.display = 'grid';
    contadorPuertas.style.display = 'block';
    contenedorPregunta.style.display = 'none';
    contenedorPuertas.classList.replace('puertas-nueva', 'puertas');
    
    puertasAbiertas = 0;

    conteoPuertas.textContent = puertasAbiertas;
    nuevaRonda();
});

btnNo.addEventListener('click', () => {
    contenedorPuertas.style.display = 'block';
    contadorPuertas.style.display = 'block';
    contenedorPregunta.style.display = 'none';
});

function repetirJuego() {
    contenedorPregunta.style.display = 'block';
    contenedorPuertas.style.display = 'none';
    contadorPuertas.style.display = 'none';

}


function generarNumero() {
    let numero = Math.floor(Math.random() * 2)+1;
    return numero;
}

precargarImagenes();
jugar();

