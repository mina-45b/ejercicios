
const btnCalcular = document.getElementById('btn-calcular');

const cliente = document.getElementById('res-cliente');
const material = document.getElementById('res-material');
const dimension = document.getElementById('res-dimension');
const comentario = document.getElementById('res-comentario');

btnCalcular.addEventListener('click', () => {
    const nombreCliente = document.getElementById('nombre').value;
    const materialCaja = document.getElementById('material').value;
    const tamanoCaja = document.querySelector('input[type=radio]:checked').value;
    const comentarioUsuario = document.getElementById('comentario').value.toUpperCase();

    comprobarNombre(nombreCliente, materialCaja, tamanoCaja, comentarioUsuario);

    console.log(tamanoCaja);
    console.log(materialCaja);
    console.log(nombreCliente);
    console.log(materialCaja);
    console.log(comentarioUsuario);
});

function comprobarNombre(nombreCliente, materialCaja, tamanoCaja, comentarioUsuario) {

    let suplementCaja = 0;
    let suplementTamano = 0;

    const precioTotal = document.getElementById('precio-total');


    if (nombreCliente === "") {
        alert('Campo Obligatorio\nIntroduzca un nombre válido');
        cliente.textContent = '—';
        material.textContent = '—';
        dimension.textContent = '—';
        comentario.textContent = '—';
    } else {
        cliente.textContent = nombreCliente;

        switch (materialCaja) {
            case 'plastico':
                material.textContent = 'Plástico';
                suplementCaja = 5;
                break;
            case 'madera':
                material.textContent = 'Madera';
                suplementCaja = 10;
                break;
            case 'aluminio':
                material.textContent = 'Aluminio';
                suplementCaja = 20;
                break;
            case 'acero':
                material.textContent = 'Acero';
                suplementCaja = 25;
                break;
            case 'platino':
                material.textContent = 'Platino';
                suplementCaja = 200;
                break;
        }

        switch (tamanoCaja) {
            case 'pequena':
                dimension.textContent = 'Pequeña';
                suplementTamano = 0;
                break;
            case 'mediana':
                dimension.textContent = 'Mediana';
                suplementTamano = 20;
                break;
            case 'grande':
                dimension.textContent = 'Grande';
                suplementTamano = 50;
                break;
        }

        if (comentarioUsuario === "") {
            comentario.textContent = '—';
        } else {
            comentario.textContent = comentarioUsuario;
        }

        precioTotal.textContent = suplementCaja + suplementTamano;

    }


}
