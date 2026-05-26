const numeroUsuario =  parseInt(prompt("Introduce un número: "));

for(i=1; i < numeroUsuario + 1; i++) {
    if ((i%3) == 0 && (i%5) == 0) {
        const p = document.createElement("p");
        document.getElementById('content').appendChild(p);
        p.textContent = "FizzBuzz"; 

    } else if((i%3) == 0) {
        const p = document.createElement("p");
        document.getElementById('content').appendChild(p);
        p.textContent = "Fizz";

    } else if((i%5) == 0) {
        const p = document.createElement("p");
        document.getElementById('content').appendChild(p);
        p.textContent = "Buzz";
    } else  {
        const p = document.createElement("p");
        document.getElementById('content').appendChild(p);
        p.textContent = i;
    }
    console.log(i);
}