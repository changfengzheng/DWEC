/**16. Escriba un programa JavaScript para calcular la suma de los dos números
enteros dados. Si los dos valores son iguales, devuelve el triple de su suma. */

const sumTriple = (num1, num2) => {
    return num1 === num2 ? 3 * (num1 + num2) : num1 + num2;
};

document.write(sumTriple(6, 6), "<br>");
document.write(sumTriple(10, 20));
