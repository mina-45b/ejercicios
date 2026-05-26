let random = 0;

const content = document.getElementById('tablas');

for(let i = 0; i < 75; i++) {
    random = Math.floor(Math.random() * 4) + 1;
    let div = document.createElement('div');

    div.style.width = '2em';
    div.style.height = '2em';

    switch(random) {
        case 1:
            div.style.background = 'blue';
            break;
        case 2:
            div.style.background = 'black';
            break;
        case 3:
            div.style.background = 'red';
            break;
        case 4:
            div.style.background = 'green';
            break;
    }

    content.appendChild(div);
}