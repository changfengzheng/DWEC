/**
 * Funcion para buscar el elemento mas repetido en un array
 * @param {*} resultado 
 */
let masRepetidos = resultado => {
    //Declaramos las variables y el array
    let array = ["elemento1", "elemento2", "elemento3", "elemento1", "elemento2", "elemento1", "elemento2", "elemento2"];
    resultado = ""
    contador = 0;
    vecesEscritas = 1;

    //Hacemos doble bucle para comparar la posicion i con x del array
    for (let i = 0; i < array.length; i++) {
        for (let x = i; x < array.length; x++) {
            //Si la posicion i es igual que la pos x, sumamos 1 al contador
            if (array[i] == array[x]) contador++;
            //Averiguamos cual es el mas repetida
            if (vecesEscritas < contador) {
                vecesEscritas = contador
                resultado = array[i]
            }
        }
        //Reseteamos el contador
        contador = 0
    }
    //Mostramos el resultado
    document.write("El elemento mas repetidas del array [" + array + "] es: " + resultado);
};
