//Muestra la url del img1
function mostrarUrl1() {

    alert(document.getElementById("img1").src);

}
//Muestra la url del img2
function mostrarUrl2() {

    alert(document.getElementById("img2").src);

}


//Iniciamos la funcnion al abrir la pagina
function iniciar() {
    document.getElementById("img1").onmouseover = mostrarUrl1;
    document.getElementById("img2").onmouseover = mostrarUrl2;
}
window.onload = iniciar;