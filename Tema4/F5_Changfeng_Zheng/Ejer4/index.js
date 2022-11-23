
function clickIzquierdo() {
    alert("Click izquierdo");
}

function clickDerecho() {
    alert("Click derecho");
}

//Ejecuta una funcion dependiento si hace click derecho o izquierdo
function iniciar() {
    document.onclick = clickIzquierdo;
    document.oncontextmenu = clickDerecho;

}
window.onload = iniciar;