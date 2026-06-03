const secciones = [
  {
    nombre: 'Introducción',
    color: 'var(--pink)',
    ejercicios: [
      {
        id: '01',
        titulo: 'Saludo',
        descripcion: 'Solicita al usuario su nombre y el día de la semana.',
        carpeta: '01-saludo'
      },
      {
        id: '02',
        titulo: 'Suma',
        descripcion: 'Solicita al usuario dos números y los suma',
        carpeta: '02-suma'
      }
    ]
  },
  {
    nombre: 'Condicionales',
    color: 'var(--mint)',
    ejercicios: [
      {
        id: '03',
        titulo: 'Nota',
        descripcion: 'Solicita al usuario la nota de un examen e indica si ha aprobado',
        carpeta: '03-nota'
      },
      {
        id: '04',
        titulo: 'Par',
        descripcion: 'Solicita al usuario dos número y comprueba si son pares',
        carpeta: '04-par'
      },
      {
        id: '05',
        titulo: 'Dia Semana',
        descripcion: 'Muestra por pantalla el dia de la semana correspondiente al número introducida por el usuario',
        carpeta: '05-dia-semana'
      }
    ]
  },
  {
    nombre: 'Bucles',
    color: 'var(--lavender)',
    ejercicios: [
      {
        id: '06',
        titulo: 'Número Par',
        descripcion: 'Solicita al usuario un número y muestra todos los pares desde 2 hasta él.',
        carpeta: '06-numero-par'
      },
      {
        id: '07',
        titulo: 'Número Par V2',
        descripcion: 'Versión 2: Solicita al usuario un número y muestra todos los pares entre 0 y el número del usuario',
        carpeta: '07-numero-par-v2'
      },
      {
        id: '08',
        titulo: 'FizzBuzz',
        descripcion: 'Solicita al usuario un número e imprime "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5, "FizzBuzz" si es divisible entre ambos',
        carpeta: '08-fizz-buzz'
      },
      {
        id: '12',
        titulo: 'Tabla de Multiplicar',
        descripcion: 'Solicita al usuario un número y muestra la tabla de multiplicar de ese número',
        carpeta: '12-tabla-multiplicar'
      },
      {
        id: '13',
        titulo: 'Tabla de Multiplicar V2',
        descripcion: 'Solicita al usuario un número y muestra la tabla de multiplicar de ese número',
        carpeta: '13-tabla-multiplicar-v2'
      },
      {
        id: '14',
        titulo: 'Tabla de Multiplicar V2.1',
        descripcion: 'Solicita al usuario un número y muestra la tabla de multiplicar de ese número',
        carpeta: '14-tabla-multiplicar-v2-1'
      },
      {
        id: '15',
        titulo: 'Todas las Tablas',
        descripcion: 'Muestra todas las tablas de multiplicar',
        carpeta: '15-todas-tablas'
      }
    ]
  },
  {
    nombre: 'Juegos',
    color: 'var(--yellow)',
    ejercicios: [
      {
        id: '09',
        titulo: 'Número Secreto V0',
        descripcion: 'El usuario debe adivinar un número',
        carpeta: '09-numero-secreto-v0'
      },
      {
        id: '10',
        titulo: 'Número Secreto V1',
        descripcion: 'El usuario debe adivinar un número',
        carpeta: '10-numero-secreto-v1'
      },
      {
        id: '11',
        titulo: 'Número Secreto V2',
        descripcion: 'El usuario debe adivinar un número',
        carpeta: '11-numero-secreto-v2'
      },
      {
        id: '23',
        titulo: 'Puerta Correcta V2',
        descripcion: 'Genera un número aleatoreo entre 1 y 2 que correspondra a una puerta, si el usuario adivina el número gana',
        carpeta: '23-puerta-correcta-v2'
      }
    ]
  },
  {
    nombre: 'DOM',
    color: 'var(--sky)',
    ejercicios: [
      {
        id: '16',
        titulo: 'Divs Aleatorios',
        descripcion: 'Genera divs aleatorios y los muestra segun un código de color',
        carpeta: '16-divs-aleatorios'
      },
      {
        id: '17',
        titulo: 'Divs Aleatorios V2',
        descripcion: 'Genera divs aleatorios y los muestra segun un código dinámicamente',
        carpeta: '17-divs-aleatorios-v2'
      }
    ]
  },
  {
    nombre: 'Funciones',
    color: 'var(--pink)',
    ejercicios: [
      {
        id: '18',
        titulo: 'Multiplicacion',
        descripcion: 'Solicita un número al usuario y lo multiplica por 10',
        carpeta: '18-multiplicacion'
      },
      {
        id: '19',
        titulo: 'Área',
        descripcion: 'Calcula el área de un rectangulo, solicita al usuario el ancho y la altura',
        carpeta: '19-area'
      },
      {
        id: '20',
        titulo: 'Coste de Hotel',
        descripcion: 'Calcula el precio de un hotel según el número de noches que este, el coste del avión de acuerdo a la ciudad a la que se dirija, el precio del coche por los días alquilados y presenta el precio total del viaje',
        carpeta: '20-coste-hotel'
      },
      {
        id: '21',
        titulo: 'Coste de Hotel V2',
        descripcion: 'Calcula el precio de un hotel según el número de noches que este, el coste del avión de acuerdo a la ciudad a la que se dirija, el precio del coche por los días alquilados y presenta el precio total del viaje',
        carpeta: '21-coste-hotel-v2'
      },
      {
        id: '22',
        titulo: 'Puerta Correcta',
        descripcion: 'Genera un número aleatoreo entre 1 y 2 que correspondra a una puerta, si el usuario adivina el número gana',
        carpeta: '22-puerta-correcta'
      },
      {
        id: '24',
        titulo: 'Cinco Nombres y Edades',
        descripcion: 'Crea un arry con cinco nombres de personas y los recorre mostrando el texto "Conozco a alguien llamando", además con otro array muestra el doble de la edad de la persona',
        carpeta: '24-cinco-nombres-edades'
      }

    ]
  },
  {
    nombre: 'Array',
    color: 'var(--mint)',
    ejercicios: [
      {
        id: '25',
        titulo: '10 Números',
        descripcion: 'Almacena 10 números introducidos por el usuarioi y los muestra ordenamente',
        carpeta: '25-10-numeros'
      },
      {
        id: '26',
        titulo: 'Lista de la Compra',
        descripcion: 'Solicita al usuario 5 artículos y los muestra por pantalla',
        carpeta: '26-lista-compra'
      },
      {
        id: '27',
        titulo: 'Lista de la Compra V2',
        descripcion: 'Solicita al usuario 5 artículos y los muestra por pantalla',
        carpeta: '27-lista-compra-v2'
      },
      {
        id: '28',
        titulo: 'Números Aleatorios',
        descripcion: 'Guarda un array de 10 números aleatorios del 1 al 100',
        carpeta: '28-numeros-aleatorios'
      }
    ]
  },
];

function limpiarScriptsEjercicio() {
  document.querySelectorAll('script[data-ejercicio]').forEach(s => s.remove());
}

function buscarEjercicioPorId(id) {
  for (const seccion of secciones) {
    const ej = seccion.ejercicios.find(e => e.id === id);
    if (ej) return ej;
  }
  return null;
}

function mostrarDetalle(ej) {
  limpiarScriptsEjercicio();

  const grid = document.getElementById('ejercicios-grid');
  grid.innerHTML = `
    <div class="exercise-page">
      <a href="#" class="back-link" id="back-link">← Volver</a>
      <span class="card-number">#${ej.id}</span>
      <h1>${ej.titulo}</h1>
      <p style="font-size:1.1rem; margin-bottom:25px;">${ej.descripcion}</p>
      <button class="btn" id="btn-comenzar">Comenzar</button>
    </div>
  `;

  document.getElementById('back-link').addEventListener('click', e => {
    e.preventDefault();
    crearCards();
  });

  document.getElementById('btn-comenzar').addEventListener('click', () => {
    window.location.href = ej.carpeta + '/';
  });
}

function crearCard(ej, contadorGlobal) {
  const card = document.createElement('div');
  card.className = 'card';

  const colorIndex = contadorGlobal % 5;
  let badgeColor = '';
  if (colorIndex === 0) badgeColor = 'var(--pink)';
  else if (colorIndex === 1) badgeColor = 'var(--mint)';
  else if (colorIndex === 2) badgeColor = 'var(--lavender)';
  else if (colorIndex === 3) badgeColor = 'var(--yellow)';
  else badgeColor = 'var(--sky)';

  const textColor = colorIndex === 3 ? 'var(--dark)' : 'white';

  card.innerHTML = `
    <span class="card-number" style="background: ${badgeColor}; color: ${textColor};">#${ej.id}</span>
    <h2>${ej.titulo}</h2>
    <button class="btn btn-abrir">Abrir ✦</button>
  `;

  card.querySelector('.btn-abrir').addEventListener('click', () => {
    mostrarDetalle(ej);
  });

  return card;
}

function crearCards() {
  const grid = document.getElementById('ejercicios-grid');
  if (!grid) return;

  let totalEjercicios = 0;
  secciones.forEach(s => totalEjercicios += s.ejercicios.length);

  if (totalEjercicios === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h2>✨ Aún no hay ejercicios ✨</h2>
        <p>¡Crea tu primer ejercicio y aparece aquí!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';

  let contadorGlobal = 0;

  secciones.forEach(seccion => {
    if (seccion.ejercicios.length === 0) return;

    const seccionDiv = document.createElement('div');
    seccionDiv.className = 'seccion';

    const tituloSeccion = document.createElement('div');
    tituloSeccion.className = 'seccion-titulo';
    tituloSeccion.innerHTML = `
      <span class="seccion-nombre">${seccion.nombre}</span>
      <span class="seccion-contador">(${seccion.ejercicios.length})</span>
    `;
    seccionDiv.appendChild(tituloSeccion);

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'cards-grid';

    seccion.ejercicios.forEach(ej => {
      const card = crearCard(ej, contadorGlobal);
      cardsGrid.appendChild(card);
      contadorGlobal++;
    });

    seccionDiv.appendChild(cardsGrid);
    grid.appendChild(seccionDiv);
  });
}

document.addEventListener('DOMContentLoaded', crearCards);
