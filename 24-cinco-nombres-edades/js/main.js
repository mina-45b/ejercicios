

let nombres = ['Ana', 'Jose', 'Rafael', 'Andrea', 'Carmen'];

let edades = [10, 15, 30, 25, 12];


nombres.forEach(function(nombre, indice) {
    const texto = document.createElement('p');
    const nombrePersona = document.createElement('strong');
    const dobleEdad = document.createElement('strong');

    texto.textContent = 'Conozco a alguien llamado ';
    nombrePersona.textContent = nombre;
    
    texto.appendChild(nombrePersona);

    texto.append(' y el doble de su edad es ');

    dobleEdad.textContent = edades[indice] * 2;

    texto.appendChild(dobleEdad);
    document.querySelector('#content').appendChild(texto);
});




