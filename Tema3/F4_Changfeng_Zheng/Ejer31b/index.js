/**
 * Funcion para eliminar un elemento de un array
 * @param {*} arrayNum 
 * @param {*} numero 
 * @returns 
 */
let eliminar = (arrayNum, numero) => {

    let arrayNuevo = [];
    //Hacemos un bucle para compara todas las posiciones del array con el numero a eliminar
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] == numero) {
            arrayNum.splice(i, 1);
            arrayNuevo.push(arrayNum);
        }
    }
    //Devolvemos el array modificada
    return arrayNuevo;
};

//Número a eliminar
let numero = parseInt(prompt("Introduce un número del 0 al 10 para eliminar"));
let arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Mostrmoas el resultado
document.write("Array inicial: [" + arrayNum + "] </br>");
document.write("Array modificada: [" + eliminar(arrayNum, numero) + "]");

