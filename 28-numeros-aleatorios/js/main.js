let array = new Array();

const menor = document.getElementById('numero-menor');
const mayor = document.getElementById('numero-mayor');

for(let i =0; i < 10; i++) {
    let numAleatorio = Math.floor(Math.random() * 100)+1;
    array.push(numAleatorio);
}

// menor - mayor
array.sort((a, b) => a - b);
console.log(array.join(','));


array.forEach(function(numero, indice) {
    switch(indice){
        case 0:
            menor.textContent = numero;
            break;
        case 9:
            mayor.textContent = numero;
            break;
    }
})

console.log(array[0] + " " + array[9]);

/* mayor -menor
array.sort((a,b) => b -b);
*/