
function obtenerFila(id) {
    return id.slice(1);
}

function obtenerInputsFila(fila) {
    return {
        a: document.getElementById(`a${fila}`),
        b: document.getElementById(`b${fila}`),
        c: document.getElementById(`c${fila}`),
        d: document.getElementById(`d${fila}`),
    };
}

function obtenerColumnaD() {

    let total = 0;

    document.querySelectorAll('[id^="d"]').forEach(input => {
        total += parseFloat(input.value) || 0;
    });

    return total;
}

function calcularFila(fila) {
    const inputs = obtenerInputsFila(fila);

    const cantidad = parseFloat(inputs.b.value) || 0;
    const precio = parseFloat(inputs.c.value) || 0;

    console.log(inputs);

    const total = cantidad * precio;

    inputs.d.value = total;
}


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (evento) => {
        const id = evento.target.id;
        const fila = obtenerFila(id);

        console.log(id + " id");
        console.log(fila + " fila");

        calcularFila(fila);

        const d = obtenerColumnaD();

      
        const e = document.getElementById('e1');
        e.value = d;

    });
});













