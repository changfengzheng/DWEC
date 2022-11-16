/**
 * Funcion para multiplicar todos los elementos de un array
 * @param {*} resultado 
 */
let multArray = resultado => {

    //Declaracmos las variables y array
    let arrayNum = [1, 2, 3, 4, 5, 6];
    resultado = 1;

    //Hacemos un bucle para multiplicar los contenidos del array
    for (let i = 0; i < arrayNum.length; i++) {
        resultado *= arrayNum[i];
    }
    
    //Imprimimos por el resultado
    document.write("El producto del array [" + arrayNum + "] es " + resultado);
};
