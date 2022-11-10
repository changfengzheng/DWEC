const mayusculas = resultado => {

    //Obtenemos los valores del formulario
    let cadena = document.getElementById("cadena").value;

    //Tranfomracion la primera caracter de cada palabra a mayuscula
    resultado = cadena.replace(/\b\w+\b/g, (caracter) => caracter[0].toUpperCase() + caracter.substring(1));
    //Mostramos el resultado
    document.write(resultado);
};
