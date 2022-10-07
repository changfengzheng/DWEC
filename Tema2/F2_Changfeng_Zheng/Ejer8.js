/** 15. Escriba un programa JavaScript para obtener la diferencia entre un número dado
y 13, si el número es mayor que 13 devuelva el doble de la diferencia absoluta.*/

function diferencia(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}

document.write(diferencia(40), "<br>")
document.write(diferencia(12))