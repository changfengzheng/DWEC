/**18. Escriba un programa JavaScript para verificar dos números dados y devolver
verdadero si uno de los números es 50 o si su suma es 50 */

function true_false(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
}

document.write(true_false(50, 50), "<br>")
document.write(true_false(20, 50), "<br>")
document.write(true_false(20, 30))