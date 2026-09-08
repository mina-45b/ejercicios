const btnCalcular = document.getElementById('calcular');
const panelResult = document.getElementById('result');

let result;

btnCalcular.addEventListener('click', () => {
    const firstNumber = document.getElementById('first-num').value;
    const secondNumber = document.getElementById('second-num').value;
    const operator = document.getElementById('operators').value;

    if(firstNumber && secondNumber) {
       result = eval(paserceNumber(firstNumber)+operator+paserceNumber(secondNumber));
       panelResult.value = result;
    }
});

function paserceNumber (number) {
    return (parseFloat(number));
}
