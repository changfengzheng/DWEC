/**Escriba un programa JavaScript en el que el programa tome un número entero
aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
aproximado. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
"No coincide". */

let numero;
let aleatorio = Math.floor(Math.random() * 10) + 1;

numero = prompt("Introduzca un numero:");

if (numero == aleatorio) {
    document.write("Buen trabajo");
}else{
    document.write("No coincide");
}
