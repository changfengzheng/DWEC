/**28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
rango */

const comprobar_num = (num1, num2) => {
    return ((num1 >= 50 && num1 <= 99) &&
        (num2 >= 50 && num2 <= 99)) ? true : false

}
document.write(comprobar_num(50, 50), "<br>");
document.write(comprobar_num(10, 25));