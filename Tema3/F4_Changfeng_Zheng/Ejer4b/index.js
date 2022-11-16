/**
 * Fucion para devolver el meses de una fecha
 * @param {*} fecha 
 * @returns 
 */
let conseguirMes = (fecha) => {
    //Array de meses
    var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    //Devolvemos la fecha 
    return array[fecha.getMonth()];
};

//Fecha
let fecha = new Date(prompt("Introduce la fecha: "));

//Mostramos el resultado
document.write("El mes de la fecha [" + fecha + "] es: " + conseguirMes(fecha));