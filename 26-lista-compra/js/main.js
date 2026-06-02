let listaCompra = new Array();

const lista = document.getElementById('lista');

for(let i = 5; i > 0; i--) {
    let articulo = pedirArticulo(i);
    let agregarArticulo = comprobarArticulo(articulo);
    if(!agregarArticulo) {
        i++;
    }
    console.log(i);
}

lista.innerHTML = listaCompra.map(articulo => `<li><p>${articulo}</p></li>`).join('');

console.log(listaCompra.join(','));
console.log(lista);

function pedirArticulo(i) {

    let articulo = "";
    
    do{
        articulo = prompt(`Vamos a comprar ${i} artículos\nIntroduzca 1:`);

        if(!isNaN(articulo)) {
            alert("Introduzca un producto válido");
        }

    }while(!isNaN(articulo));
    
    return articulo;    
}


function comprobarArticulo(articulo) {
    let index = listaCompra.indexOf(articulo);
    let articuloAgregado = true;

    if(index === -1) {
        listaCompra.push(articulo.toLowerCase());
        console.log(articulo + " articulo");
        articuloAgregado = true;
    } else {
        alert("Este articulo ya esta en la lista, introduzca otro");
        console.log("articulo no agregado " + articulo);
        articuloAgregado = false;
    }

    return articuloAgregado;
}