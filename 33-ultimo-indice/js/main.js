const inputFile = document.getElementById('file');
const nameFile = inputFile.files[0].name;
let divResult = document.createElement("div");
let newContent = document.createTextNode("El nombre del archivo es:")
let nameFileText = document.createElement("strong");
divResult.appendChild(newContent);

function removeExtension(nameFile){
    let nonExtension = last
}