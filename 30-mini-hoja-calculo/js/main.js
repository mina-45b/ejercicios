

/* --------------------- MI VERSION
let abc1 = new Array();
let abc2 = new Array();
let abc3 = new Array();

let numeroUsuario = 0;

for(let i = 0; i < 9; i++) {
    numeroUsuario = parseInt(prompt(`Introduzca 9 números\nLlevas ${i}/9`));

    if(i < 3) {
        abc1.push(numeroUsuario);
        console.log('array 1 ' + abc1.join(','));
    } else if (i < 6) {
        abc2.push(numeroUsuario);
        console.log('array 2 ' + abc2.join(','));
    } else {
        abc3.push(numeroUsuario);
        console.log('array 3 ' + abc3.join(','));
    }
}

let abc = [abc1, abc2, abc3];

console.log("Resultado final " + abc.join('-'));
*/


// --------------- VERSION MÁS FUNCIONAL > FUENTES

function pedirNumeros() {
    let abc = [[], [], []];
    let numeroUsuario = 0;

    for(let i = 0; i < 9; i++) {

        numeroUsuario = parseInt(prompt(`Introduzca 9 números\nLlevas ${i}/9`));

        /*
        Cuando divides i / 3, obtienes números como 0, 0.33, 0.66, 1, 1.33, etc.
        Math.floor() redondea hacia abajo al entero más cercano, así que convierte esos valores en 0, 0, 0, 1, 1, 1, 2, 2, 2. La fórmula general es: Math.floor(i / tamañoDelGrupo), guarda cada 3 numeros
        */
        let fila = Math.floor(i / 3);
        abc[fila].push(numeroUsuario);
    }

    console.log("Resultado final " + abc.join('-'));

    return abc;
}


const a = document.querySelectorAll('.a');
const b = document.querySelectorAll('.b');
const c = document.querySelectorAll('.c');
const d = document.querySelectorAll('.d');

console.log(a);
