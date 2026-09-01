const btnLoadingFile = document.querySelector('input[type="button"]');

const mainContent = document.getElementById('content');
const divResult = document.createElement("div");
const resultText = document.createElement("p");
const nameFileText = document.createElement("strong");



btnLoadingFile.addEventListener('click',() =>
{
    const inputFile = document.getElementById('file');
    if (inputFile.files.length > 0)
    {
        const nameFile = inputFile.files[0].name;
        resultText.textContent = "El nombre del archivo es: ";
        nameFileText.textContent = removeExtension(nameFile);
        resultText.appendChild(nameFileText);
        divResult.appendChild(resultText);
        mainContent.appendChild(divResult);
    }
});

function removeExtension(nameFile){
    let extensionFile = nameFile.substring(nameFile.lastIndexOf("."));
    let nonExtensionName = nameFile.replace(extensionFile, "");
    return nonExtensionName;
}
