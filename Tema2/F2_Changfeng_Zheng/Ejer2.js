/**Escriba un programa JavaScript para calcular los días que quedan hasta la
próxima Navidad. */

let now = new Date();

let navidad = new Date();
navidad.setMonth(11);
navidad.setDate(24);

let year = now.getFullYear();
let diff = navidad - now;
let time;

if (diff < 0) {
    navidad.setFullYear(year + 1);
    diff = navidad - now;
}

time = Math.ceil(1.0 * diff / (1000 * 3600 * 24));
document.write("Queda " + time + " dias para la proxima navidad");