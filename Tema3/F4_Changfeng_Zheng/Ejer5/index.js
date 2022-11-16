/**
 * Funcion para unir los elemetos de un array
 * @param {*} resultado 
 */
let unirArray = resultado => {
    //Declaramos las variables y array
    let array = ["hola", "que", "tal", "elemento4"];
    resultado = array.join(" ")

    //Mostramos en documento
    document.write("Unimos la array [" + array + "] : " + resultado);
};
