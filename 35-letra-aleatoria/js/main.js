const nameInput = document.querySelector('input[type="text"]');
const btnGenerate = document.querySelector('input[type="button"]');
const mainDiv = document.getElementById('content');
const contentResult = document.getElementById('result');

btnGenerate.addEventListener('click', () =>
{
    if(nameInput.value)
    {
        const textLetter = document.createElement("p");
        let result = generatePosition(nameInput);
        console.log(result);
        textLetter.textContent = nameInput.value.charAt(result).toUpperCase();
        contentResult.replaceChildren(textLetter);
        mainDiv.appendChild(contentResult);
    }
});

function generatePosition(input){
    let inputLength = (input.value.length) - 1;
    const position = Math.floor(Math.random() * (inputLength - 0 + 1)) + 0;
    return position;
}