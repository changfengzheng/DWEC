let buscar = resultado => {

    //Obtenemos los valores del formulario
    let cadena = document.getElementById("cadena").value
    let cadenaBuscar = document.getElementById("cadenaBuscar").value

    //Buscamos la cantidad de veces que muestra la subcadena en la cadena
    resultado = (cadena.split(cadenaBuscar).length - 1);

    //Mostramos el resultado
    document.write('Aparece ' + resultado + ' veces la subcadena ' + cadenaBuscar);
};
