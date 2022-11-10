let extraer = resultado => {
    //Obtenemos los valores del formulario
    let num = document.getElementById("nCaracter").value
    let cadena = document.getElementById("cadena").value

    //Mostramos los caracteres desde el caracter 0 hasta el num
    resultado = cadena.slice(0, num);
    //Mostramos el resultado
    document.write(resultado)

};