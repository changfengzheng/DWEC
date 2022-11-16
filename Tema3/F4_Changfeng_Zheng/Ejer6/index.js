/**
 * Funcion para obtener el mayor numero de un array
 * @param {*} resultado 
 */
let maxNum = resultado => {

    //Declaramos las variables y array
    let array = [11, 3, 16, 90];
    resultado = array[0];
    
    //Comparamos cada numeros del array para obtener el max
    for (let i = 0; i < array.length; i++) {
        if (array[i] > resultado) {
            resultado = array[i]
        }
    }
    //Imprimos el resultado
    document.write("El numero mayor del array [" + array + "] es " + resultado);

};
