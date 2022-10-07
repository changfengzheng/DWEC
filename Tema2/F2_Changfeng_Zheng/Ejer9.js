/**16. Escriba un programa JavaScript para calcular la suma de los dos números
enteros dados. Si los dos valores son iguales, devuelve el triple de su suma. */

function sumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    }
    else {
        return (x + y);
    }
}
document.write(sumTriple(6, 6), "<br>");
document.write(sumTriple(10, 20));
