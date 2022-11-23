//Cuando levantamos la tecla, ejecutamos la funcion
document.addEventListener("keyup", mostrarTeclaPulsada, false);

/**
 * Funcion para para mostra la tecla que hemos pulsados
 * @param {*} evento 
 */
function mostrarTeclaPulsada(evento) {
    //Tecla alt + tecla
    if (evento.altKey) {
        alert("Alt + " + evento.key)
    } else if (evento.ctrlKey) {
        //Tecla ctrl + tecla
        alert("Control + " + evento.key)
    } else if (evento.shiftKey) {
        //Tecla shift + tecla
        alert("Shift + " + evento.key)
    } else {
        alert(evento.key);
    }
}
