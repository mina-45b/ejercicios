const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');
const configuracion_ventana =
  "width=300,height=300,left=250,top=50,menubar=yes,scrollbars=yes,status=yes";

var myWindow;
var temporizador;

btnOpen.addEventListener('click', () =>
{
   openPopUP();
});

btnClose.addEventListener('click', () =>
{
    closePopUp();
});

function openPopUP(){
    myWindow = window.open(
        'html/mywindow.html',
        '_blank',
        configuracion_ventana,
    );
    temporizador = setTimeout('myWindow.close()',30000);
}

function closePopUp() {
    myWindow.close();
    clearTimeout(temporizador);
}