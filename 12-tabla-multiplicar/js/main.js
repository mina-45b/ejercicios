
let numeroUsuario = 0;

while(numeroUsuario < 1 ||  numeroUsuario > 10) {
   numeroUsuario = parseInt(prompt("Introduzca un númeor del 1 al 10", "solo números del 1 - 10"))
   if(numeroUsuario < 1 || numeroUsuario > 10){
    alert("Número fuera de rango");
   }
   
}


let p = document.createElement("p");
p.textContent = "Tabla del " + numeroUsuario;
p.style.textTransform = 'uppercase';

document.getElementById('content').appendChild(p);

for(let i=1; i <= 10; i++) {
    let p = document.createElement("p");

    p.textContent = numeroUsuario + " x "+ i + " = ";

    let strong = document.createElement("strong");

    let resultado = numeroUsuario * i;

    strong.textContent = resultado;

    document.getElementById('content').appendChild(p);
    p.appendChild(strong);
    
}