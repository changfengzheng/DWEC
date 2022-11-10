let ocultarCorreo = resultado => {

    //Obtenemos los valores del formulario
    let correo = document.getElementById("correo").value

    //Con substring cogemos los tres primeros caracteres, el añadimos tres puntos
    //Y mostramos los caracteres posterior al @
    resultado = correo.substring(0,3) + '...' + correo.substring(correo.indexOf('@'), correo.length);

    //Mostramos el resultado 
    document.write('Correo ocultado: ' + resultado);
};
