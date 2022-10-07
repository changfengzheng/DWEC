/**11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
Celsius, fare.
[Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius yf = temperatura en
fare]
Salida esperada :
60 ° C es 140 ° F
45 ° F es 7.222222222222222 ° C */

let centi;
let fare;

const celToFahr = (c) => {
    centi = c;
    fare = c * 1.8 + 32;
    document.write(centi + " ° C es " + fare + " ° F", "<br>");
};

const fahrToCel = (f) => {
    fare = f;
    centi = (f - 32) / 1.8;
    document.write(fare + " ° F es " + centi + " ° C ");
};

celToFahr(60);
fahrToCel(45);