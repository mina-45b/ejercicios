function costeHotel(noches) {
    const precioNoche = 60;

    let precioTotal = noches * precioNoche;

    return precioTotal;
}

function pedirNoches() {
    let numNoches = 0;

    do {
        numNoches = parseInt(prompt("Introduce el número de noches que pasaras en el Hotel:"))
        
        if(numNoches === null || numNoches === "" || isNaN(numNoches)) {
            alert("Introduzca únicamente el número de noches");
        }

    } while(numNoches === null || numNoches === "" || isNaN(numNoches));

    return numNoches;
}

function pedirNombreCiudad() {
    let entrada = "";

    const ciudades = ["paris","boston","londres"];

    const mensaje = "Ciudades disponibles:\n" + ciudades.join("\n").toUpperCase();

    do {
       entrada = prompt(`Introduzca el nombre de la ciudad a visitar\n${mensaje}`).toLowerCase();

       if(entrada === "" || !ciudades.includes(entrada)) {
        alert("No se ha ingresado ninguna ciudad valida");
       }

    } while(entrada === "" || !ciudades.includes(entrada));

    return entrada;
}

function costeAvion(nombreCiudad) {
    let precioAvion = 0;
    switch(nombreCiudad){
        case "paris":
            precioAvion = 180;
            break;
        case "boston":
            precioAvion = 600;
            break;
        case "londres":
            precioAvion = 120;
            break;
    }

    return precioAvion;
}

function costeCoche(diasAlquiler) {

    const precioDia = 40;
    const precioCalculado = diasAlquiler * precioDia;

    let precioTotal = 0;

    if(diasAlquiler >= 7) {
        precioTotal = precioCalculado - 50;
        console.log(precioTotal + "mas de 7 dias");
    } else if(diasAlquiler >= 3) {
        precioTotal = precioCalculado - 20;
        console.log(precioTotal + "mas de 3 dias");
    }

    return precioTotal;

}


function pedirDias() {
    let numDias = 0;

    do {
        numDias = parseInt(prompt("Introduce el número de días que alquilara el coche:\n\n·Recibe 20€ de descuento por 3 días de alquier o más\n\n·Recibe 50€ de descuento por 7 días de alquiler o más"))
        
        if(numDias === null || numDias === "" || isNaN(numDias)) {
            alert("Introduzca únicamente el número de dias");
        }

    } while(numDias === null || numDias === "" || isNaN(numDias));

    return numDias;
}


function iniciar() {

    const numNoches = document.getElementById('noches');
    const precioFinal = document.getElementById('precio');
    const nomCiudad = document.getElementById('ciudad');
    const precioAvion = document.getElementById('precio-avion');
    const numDias = document.getElementById('dias');
    const precioAlquiler = document.getElementById('precio-alquiler');

    let noches = pedirNoches();
    let coste = costeHotel(noches);

    numNoches.textContent = noches;
    precioFinal.textContent = coste;

    alert(`Por ${noches} noches el precio final es ${coste}€`);

    let ciudad = pedirNombreCiudad();
    let avion = costeAvion(ciudad);

    nomCiudad.textContent = ciudad;
    precioAvion.textContent = avion;

    alert(`El coste del avión a ${ciudad} es de ${avion}€`);

    let dias = pedirDias();
    let total = costeCoche(dias);
    console.log(total + "el total");

    numDias.textContent = dias;
    precioAlquiler.textContent = total;

    alert(`Por ${dias} días de alquier de coche el precio total es de ${total}€`)

}

iniciar();