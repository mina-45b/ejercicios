const calculateBoton = document.getElementById('btn-calcular');
let daysResult = document.getElementById('days');
calculateBoton.addEventListener('click', () => {
    let birthDateInput = document.querySelector('input[type="date"]');
    console.log(birthDateInput.value);
    let birthDate = new Date(birthDateInput.value);
    console.log(birthDate);
    daysResult.textContent = getDateDifference(birthDate);
});

function getDateDifference(birthDate){
    let today = new Date();
    let differenceInMS = today.getTime() - birthDate.getTime();
    let differenceInDays = differenceInMS / 1000 / 3600 / 24;
    return (Math.floor(differenceInDays));
}