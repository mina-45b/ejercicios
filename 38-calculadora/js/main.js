var firstNumber;
var secondNumber;
let operator;
var actualNumber = "";
let result;
let newOperation = 0;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');
const screen = document.getElementById('screen');
const btnClear = document.getElementById('btn-clear');

numbers.forEach(number => {
    number.addEventListener('click', (evento) => {
        actualNumber += evento.target.value;
        if(newOperation){
            screen.replaceChildren();
            newOperation = 0;
        }
        screen.insertAdjacentHTML('beforeend', `<span>${evento.target.value}</span>`);
        console.log(`el numero acutal es ${actualNumber}`);
    });
});

operators.forEach(symbol => {
    symbol.addEventListener('click', (evento) => {
        if(((evento.target.value == '-') && (!firstNumber && !secondNumber))) {
            firstNumber = '-';
        } else if(evento.target.value == '-' && operator == '-' && !secondNumber) {
            secondNumber = '-';
        } else {
            firstNumber += actualNumber;
            operator = evento.target.value;
            actualNumber = "";
        }
        
        screen.insertAdjacentHTML('beforeend', `<span>${evento.target.value}</span>`);
        console.log(`El operador es ${evento.target.value}`);
    });
});

equal.addEventListener('click', () => {
    secondNumber += actualNumber;
    result = operacion(operator, Number(firstNumber), Number(secondNumber));
    actualNumber = "";
    screen.innerHTML = `<strong>${result}</strong>`;
    newOperation = 1;
    console.log(`El resultado es: ${result}`);
});

function operacion(operator, number1, number2){
    let resultFinal = 0;
    switch(operator){
        case '+':
            resultFinal = number1 + number2;
            break;
        case '-':
            resultFinal = number1 - number2;
            break;
        case '*':
            resultFinal  = number1 * number2;
            break;
        case '/':
            resultFinal = number1 / number2;
    }
    return (resultFinal.toFixed(2));
}

btnClear.addEventListener('click', () => {
    screen.replaceChildren();
    firstNumber = "";
    secondNumber = "";
    actualNumber = "";
    operator = "";
    newOperation = 0;
});