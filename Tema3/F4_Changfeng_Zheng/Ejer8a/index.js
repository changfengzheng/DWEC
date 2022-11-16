/**
 * Funcion que devulve la diferencia de dos fechas en dias
 * @param {*} fecha1 
 * @param {*} fecha2 
 * @returns 
 */
let difFecha = (fecha1, fecha2) => {

    //Calculamos la diferencia
    let diferencia = fecha1.getTime() - fecha2.getTime();

    //Lo pasamos a dia
    let diferenciaDias = diferencia / (1000 * 3600 * 24);

    //Devolvemos en dias positivo
    return Math.abs(diferenciaDias);

};

//Introducción de las fechas por prompt
let fecha1 = new Date(prompt("Introduce la 1º fecha a comparar (Ej: 01/05/2022): "));
let fecha2 = new Date(prompt("Introduce la 2º fecha a comparar:"));

//Mostramos el resultado
document.write("La diferencia entra la primera y segunda fecha es: " + difFecha(fecha1, fecha2));


