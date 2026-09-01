const textInput = document.querySelector('input[type="text"]');
const btnConvert = document.querySelector('input[type="button"]');
const divResult = document.getElementById('result');
const resultText = document.createElement("p");

btnConvert.addEventListener('click', () =>
{
    if (textInput.value){
        resultText.textContent = convertToLowUp(textInput);
        divResult.appendChild(resultText);
        divResult.style.display = 'inline';
    }
});

function convertToLowUp(input){
    let lowInput = input.value.toLowerCase();
    lowInput = lowInput.replace(/[áàäâ]/, "a");
    lowInput = lowInput.replace(/[éèëê]/, "e");
    lowInput = lowInput.replace(/[íìïî]/, "i");
    lowInput = lowInput.replace(/[óòöô]/, "o");
    lowInput = lowInput.replace(/[úùüû]/, "u");
    const firstLetter = lowInput.charAt(0);
    let result = lowInput.replace(firstLetter, firstLetter.toUpperCase());
    return result;
}