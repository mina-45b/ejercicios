const content = document.getElementById('tablas');

for(let i = 1; i <= 10; i++){
    let div = document.createElement('div');
    for(let j = 1; j <= 10; j++) {

        let operacion = document.createElement('p');
        let resultado = document.createElement('strong');

       operacion.textContent = `${i} x ${j} =`;
       resultado.textContent = i * j;

       content.appendChild(div);
       operacion.appendChild(resultado);
       div.appendChild(operacion);

    }
}