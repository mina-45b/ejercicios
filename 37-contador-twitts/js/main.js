const textArea = document.getElementById('myTextArea');
const counter = document.getElementById('counter');

function counterTextArea() {
    textArea.addEventListener('input', (event) =>
    {
        let contentText = event.target.value;
        counter.textContent = contentText.length;  
    });   
}

counterTextArea();