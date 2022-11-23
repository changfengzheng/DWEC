function mover(x) {

    let distancia = 10;

    const estilo = document.getElementById("caja").style;

    //Dependiendo la tecle que pulse, resta o suma 10 de distancia.
    switch (x.key) {
        //Flecha arriba
        case 'ArrowUp':
            estilo.top = `${parseInt(estilo.top) - distancia}px`;
            break;
        //Flecha abajo
        case 'ArrowDown':
            estilo.top = `${parseInt(estilo.top) + distancia}px`;
            break;

        //Flecha izquierda
        case 'ArrowLeft':
            estilo.left = `${parseInt(estilo.left) - distancia}px`;
            break;

        //Flecha derecho
        case 'ArrowRight':
            estilo.left = `${parseInt(estilo.left) + distancia}px`;
            break;
    }
}

//Iniciamos la funcnion al abrir la pagina
function iniciar() {
    document.onkeydown = mover;
}
window.onload = iniciar;