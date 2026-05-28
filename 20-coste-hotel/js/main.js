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
       entrada = prompt(`Introduzca el nombre de la ciudada a visitar:\n ${mensaje}`).toLowerCase();

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


function iniciar() {

    const numNoches = document.getElementById('noches');
    const precioFinal = document.getElementById('precio');
    const nomCiudad = document.getElementById('ciudad');
    const precioAvion = document.getElementById('precio-avion');

    let noches = pedirNoches();
    let coste = costeHotel(noches);

    numNoches.textContent = noches;
    precioFinal.textContent = coste;

    alert(`Por ${noches} noches el precio final es ${coste}`);

    let ciudad = pedirNombreCiudad();
    let avion = costeAvion(ciudad);

    nomCiudad.textContent = ciudad;
    precioAvion.textContent = avion;

    alert(`El coste del avión a ${ciudad} es de ${avion}`);

}

iniciar();