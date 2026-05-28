function costeHotel(noches) {
    const precioNoche = 60;

    let precioTotal = noches * precioNoche;

    return precioTotal;
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
    const precioBase = diasAlquiler * precioDia;

    let descuento = 0;

    if(diasAlquiler >= 7) {
        descuento = 50;
    } else if(diasAlquiler >= 3) {
        descuento = 20;
    } 

    const precioTotal = precioBase - descuento;

    return {precioBase, precioTotal, descuento};

}

function costeViaje() {

    let boton = document.getElementById('btn-calcular');

    const hotel = document.getElementById('precio-hotel');
    const vuelo = document.getElementById('precio-vuelo');
    const coche = document.getElementById('precio-coche');
    const descuento = document.getElementById('descuento');

    const totalViaje = document.getElementById('precio-total');

    boton.addEventListener('click', () => {

        descuento.textContent = ""

        let noches = document.getElementById('noches').value;
        let ciudad = document.getElementById('ciudad').value;
        let diasAlquiler = document.getElementById('dias').value;


        const precioHotel = costeHotel(noches);
        const precioAvion = costeAvion(ciudad);
        const precioCoche = costeCoche(diasAlquiler);

    
        hotel.textContent = precioHotel;
        vuelo.textContent = precioAvion;
        coche.textContent = precioCoche.precioBase;

        if(precioCoche.descuento > 0) {
            descuento.textContent = `-${precioCoche.descuento}€`
        }
    
        let precioFinal = precioHotel + precioAvion + precioCoche.precioTotal;
    
        totalViaje.textContent = precioFinal;
    });

}


costeViaje();