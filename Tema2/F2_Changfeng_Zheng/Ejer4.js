/**11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
Celsius, Fahrenheit.
[Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius yf = temperatura en
Fahrenheit]
Salida esperada :
60 ° C es 140 ° F
45 ° F es 7.222222222222222 ° C */

let centi, fare;
let centi2, fare2;

centi = parseFloat(prompt("Ingresa grados centígrados"));
fare = (9 / 5 * centi) + 32;

fare2 = parseFloat(prompt("Ingresa la temperatura Fahrenheit"));
centi2 = (fare2 - 32) * 5/9

document.write(centi + " ° C es " + fare + " ° F" );
document.write("<br>");
document.write(fare2 + " ° F es " + centi2 + " ° C ");
