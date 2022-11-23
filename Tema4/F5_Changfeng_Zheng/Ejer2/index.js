//Al pulsar botón del raton se pone el amarillo
function Amarillo() {
    document.getElementById("cuadroTxt").style.backgroundColor = "#FFFF00";

}
//Al mover el cursor se pone el blanco
function Blanco() {
    document.getElementById("cuadroTxt").style.backgroundColor = "White";

}
//Al pulsar una tecla se pone en azul
function Azul() {
    document.getElementById("cuadroTxt").style.backgroundColor = "#CCE6FF";

}

//Iniciamos la funcnion al abrir la pagina
function iniciar() {
    document.onclick = Amarillo;
    document.onmousemove = Blanco;
    document.onkeydown = Azul;
}

window.onload = iniciar;