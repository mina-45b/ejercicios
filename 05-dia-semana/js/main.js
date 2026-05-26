let dia = document.getElementById('dia');

let diaUsuario = prompt("Introduce un número del 1 al 7", "0 - 7");

switch(diaUsuario) {
    case '1':
        dia.textContent = "LUNES";
        break;
    case '2':
        dia.textContent = "MARTES";
        break;
    case '3':
        dia.textContent = "MIERCOLES";
        break;
    case '4':
        dia.textContent = "JUEVES";
        break;
    case '5':
        dia.textContent = "VIERNES";
        break;
    case '6':
        dia.textContent = "SABADO";
        break;
    case '7':
        dia.textContent = "DOMINGO";
        break;
    default:
        dia.textContent = "Número no válido";
}