

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

    for (let i = 0; i < 9; i++) {

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


let abc = pedirNumeros();

const filas = [
    document.querySelectorAll('.row1'),
    document.querySelectorAll('.row2'),
    document.querySelectorAll('.row3')
];

let suma = 0;
let resultado = new Array();

//Recorrer cada .rowx y recorre dentro de cada .rowx los elementos que tienen la misma clase
filas.forEach((fila, filaIndex) => { // 0, 1, 2, 3
    fila.forEach((columna, colIndex) => { //0-1-2 , 3-4-5, 6-7-8, 9-10-11
        if(colIndex < 3){
            columna.textContent = abc[filaIndex][colIndex]; //(1-4-5) = [0], 7-0-52-1-9

            suma += abc[filaIndex][colIndex]; // 0+1=1 - 1+4=5 - 5+5=10
        }


        if(colIndex == 2) {
            resultado.push(suma);
            suma = 0;
        }

        if(colIndex == 3) {
            columna.textContent = resultado[filaIndex];
        }

        console.log(columna.textContent + " El contenido");
        console.log(colIndex + " Columna indice");
        console.log(filaIndex + " Fila indice")

        console.log(suma + " La suma");
        /*if(filaIndex === 3) {
            console.log("hola");

        }
        let fila = Math.floor(i / 3);
        abc[fila].push(numeroUsuario);
        
        */

    });
});



