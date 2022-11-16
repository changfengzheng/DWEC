/**
 * Funcion para sumar los numeros de un array
 * @param {*} resultado 
 */
let sumArray = resultado => {
    //Declaracmos las variables y array
    let arrayNum = [1, 2, 3, 4, 5, 6];
    resultado = 0;

    //Hacemos un bucle para sumar los contenidos del array
    for (let i = 0; i < arrayNum.length; i++) {
        resultado += arrayNum[i];
    }
    //Imprimimos por el resultado
    document.write("La suma del array [" + arrayNum + "] es " + resultado);
};
