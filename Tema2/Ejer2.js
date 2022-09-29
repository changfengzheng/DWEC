

/*Utilizado for */
let aux = 1;

for (i = 2; i <= 1000; i *= 2) {
    console.log("2 elevado a " + aux + " es igual a " + i);
    aux++;
}
console.log("Se han escrito las potencias de 2 menores de 1000");

/*Utilizado while */
let aux2 = 1;
let x = 0;

while(aux2 <= 1000){
    x *= 2
    console.log("2 elevado a " + aux2 + " es igual a " + x);
    aux2++;
}
console.log("Se han escrito las potencias de 2 menores de 1000");

/*Utilizado do while */
