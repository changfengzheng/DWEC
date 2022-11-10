insertar = resultado => {

    //Obtenemos los valores del formulario
    let cadena = document.getElementById("cadena").value;
    let cadenaInsertar = document.getElementById("cadenaInsertar").value
    let posicion = document.getElementById("pos").value;

    //Si no definimos la posicion, se insertara en la posicion 0
    if (posicion == undefined) {
        posicion = 0;
    }

    //si no se ha definido cadena a insertar, no insesrtamos nada
    if (cadenaInsertar == undefined) {
        cadenaInsertar = "";
    }

    //Mostramos la cadena modificada con slice
    resultado = cadena.slice(0, posicion) + cadenaInsertar + cadena.slice(posicion);

    document.write(resultado);
};

