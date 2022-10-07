/**18. Escriba un programa JavaScript para verificar dos números dados y devolver
verdadero si uno de los números es 50 o si su suma es 50 */

const true_false = (num1, num2) => {
    return num1 + num2 === 50 || num1 === 50 || num2 === 50 ? true : false;
};
document.write(true_false(50, 50), "<br>")
document.write(true_false(20, 20), "<br>")
document.write(true_false(20, 30))
