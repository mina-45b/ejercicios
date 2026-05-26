# Memory — Cómo añadir ejercicios JS

## Estructura del proyecto

```
ejercicios/
├── index.html              ← Página principal con las cards
├── css/
│   └── style.css           ← Estilo pixel art
├── js/
│   └── ejercicios.js       ← Config: secciones y ejercicios
├── 01-saludo/
│   ├── index.html          ← Se abre al presionar "Comenzar"
│   └── js/main.js
└── 02-suma/
    ├── index.html
    └── js/main.js
```

## Organización por Secciones

Ahora los ejercicios se organizan en **secciones** (ej: "Introducción", "Condicionales", "Bucles", etc.). Cada sección tiene:

| Campo       | Qué va ahí |
|-------------|------------|
| `nombre`    | Nombre de la sección |
| `color`     | Color (opcional, para uso futuro) |
| `ejercicios`| Array con los ejercicios de la sección |

Ejemplo de estructura:

```js
const secciones = [
  {
    nombre: 'Introducción',
    color: 'var(--pink)',
    ejercicios: [
      { id: '01', titulo: 'Saludo', ... },
      { id: '02', titulo: 'Suma', ... },
    ]
  },
  {
    nombre: 'Condicionales',
    color: 'var(--mint)',
    ejercicios: [
      { id: '03', titulo: 'Nota', ... },
    ]
  }
];
```

## Añadir un ejercicio nuevo

### 1. Crear la carpeta del ejercicio

Dentro de `ejercicios/`, creá una carpeta:

```
03-calculadora/
```

Dentro creá `index.html` con el HTML del ejercicio y `js/main.js` con tu código JavaScript.

### 2. Agregarlo a una sección en `js/ejercicios.js`

Abrí `js/ejercicios.js` y agregá un objeto dentro del array `ejercicios` de la sección que corresponda:

```js
{
  id: '03',
  titulo: 'Calculadora',
  descripcion: 'Suma, resta, multiplica y divide dos números.',
  carpeta: '03-calculadora'
}
```

| Campo        | Qué va ahí |
|-------------|------------|
| `id`         | Número de ejercicio en string (`'03'`) |
| `titulo`     | Nombre visible en la card |
| `descripcion`| Texto que se muestra en la pantalla de detalle |
| `carpeta`    | Nombre exacto de la carpeta |

### 3. Crear el `index.html` del ejercicio

Dentro de la carpeta (ej. `03-calculadora/index.html`), creá el HTML completo que quieras que se vea al presionar **Comenzar**. Debe incluir su propio `<script src="js/main.js">`.

### 4. Listo

Abrí `index.html` y hacé clic en **Abrir ✦** → se muestra la pantalla de detalle con la descripción. Presioná **Comenzar** → se abre el `index.html` del ejercicio.

## Crear una sección nueva

Para agregar una sección nueva, agregá un objeto al array `secciones` en `js/ejercicios.js`:

```js
{
  nombre: 'Funciones',
  color: 'var(--pink)',
  ejercicios: []
}
```

Luego agregá ejercicios dentro de su array `ejercicios`.

## Flujo de navegación

1. **Secciones con título**: cada sección muestra su nombre y cantidad de ejercicios.
2. **Grid de cards**: dentro de cada sección, las cards muestran el badge `#01`, el título, y un botón **Abrir ✦**.
3. **Detalle**: al presionar **Abrir ✦** se reemplaza el grid con la pantalla de detalle: badge, título, descripción y botón **Comenzar**. Hay un link **← Volver** para regresar.
4. **Ejecución**: al presionar **Comenzar** se abre el `index.html` de la carpeta del ejercicio.

## Reglas

- El `id` debe coincidir con el número de carpeta: `03-calculadora` → `id: '03'`
- Los IDs deben seguir correlativamente (`01`, `02`, `03`...)
- Cada ejercicio tiene su propio `index.html` y `js/main.js` — así no se mezclan variables entre ejercicios
- El `index.html` de cada ejercicio debe incluir su propio `<script src="js/main.js"></script>`
- Los `id` de los elementos HTML en cada ejercicio deben ser únicos

## Tips visuales

- El badge `#01` tiene 5 colores que rotan cíclicamente: rosa, menta, lavanda, amarillo, celeste.
- Para cambiar los colores, editá las variables en `css/style.css`:

```css
--pink: #ff6b9d;
--mint: #7bd389;
--lavender: #b388ff;
--yellow: #ffd93d;
--sky: #80d8ff;
```

- Las secciones muestran su nombre en estilo pixel art.
