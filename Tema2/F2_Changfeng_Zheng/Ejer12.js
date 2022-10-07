/**28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
rango */

function check_numbers(x, y) {
    //
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    }else {
        return false;
    }
}

document.write(check_numbers(50, 50), "<br>");
document.write(check_numbers(10, 25));
