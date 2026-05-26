
const content = document.getElementById('tablas');

const divs = [];

for (let i = 0; i < 75; i++) {
    let div = document.createElement('div');

    div.style.width = '2em';
    div.style.height = '2em';
    div.style.opacity = 1;

    content.appendChild(div);
    divs.push(div);
}

function comportamientoPorColor(color) {

    switch (color) {

        case 'blue':
            return { fade: 200, step: 0.2 };

        case 'black':
            return { fade: 600, step: 0.05 };

        case 'red':
            return { fade: 300, step: 0.3 };

        case 'green':
            return { fade: 1000, step: 0.1 };
    }
}
function cambiarColores() {

    divs.forEach((div, index) => {

        setTimeout(() => {

            // 1. elegir color
            let random = Math.floor(Math.random() * 4) + 1;
            let color = '';

            switch (random) {
                case 1: color = 'blue'; break;
                case 2: color = 'black'; break;
                case 3: color = 'red'; break;
                case 4: color = 'green'; break;
            }

            div.style.background = color;

            // 2. comportamiento según color
            let config = comportamientoPorColor(color);

            // fade out progresivo
            div.style.opacity = 1;

            let opacidad = 1;

            let interval = setInterval(() => {

                opacidad -= config.step;

                if (opacidad <= 0) {
                    clearInterval(interval);
                    div.style.opacity = 1; // reset
                } else {
                    div.style.opacity = opacidad;
                }

            }, config.fade / 10);

        }, index * 20);
    });
}

setInterval(cambiarColores, 1000);
