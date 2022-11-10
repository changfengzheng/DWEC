
let buscarPalabra = resultado => {

    //Obtenemos los valores del formulario
    //Añadimos un espacio por delante y por detras para facilitar la busqueda de palabra
    let cadena = ' ' + document.getElementById("cadena").value + ' ';
    let palabraBuscar = document.getElementById("palabraBuscar").value;

    //Buscamos la cantidad de veces que muestra palabra en la cadena
    //Para comprobar si es una palabra y no una cadena, añadimos un espacio pode delante
    //y por detras.
    resultado = (cadena.split(' ' + palabraBuscar + ' ').length - 1);

    //Mostramos el resultado
    document.write('Aparece ' + resultado + ' veces la palabra ' + palabraBuscar);

};
