
function pedirNumero() {

    let numeroUsuario;
    
    do {
         numeroUsuario = Number(prompt("Introduzca un número"));
         console.log(numeroUsuario);


        if(numeroUsuario === null || numeroUsuario === "" || isNaN(numeroUsuario) ) {
            alert("Introduzca únicamente números")
        }

    } while(numeroUsuario === null || numeroUsuario === "" || isNaN(numeroUsuario));

    multiplicar(numeroUsuario);

}

function multiplicar(numeroUsuario) {

    const numero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    let multiplicacion = numeroUsuario * 10;


    numero.textContent = numeroUsuario;
    resultado.textContent = multiplicacion;

    alert(`Resultado ${multiplicacion}`);
}

pedirNumero();