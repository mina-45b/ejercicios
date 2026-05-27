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

function iniciar() {

    const numNoches = document.getElementById('noches');
    const precioFinal = document.getElementById('precio');

    let noches = pedirNoches();
    let coste = costeHotel(noches);

    numNoches.textContent = noches;
    precioFinal.textContent = coste;

    alert(`El precio final es ${coste}`);
}

iniciar();