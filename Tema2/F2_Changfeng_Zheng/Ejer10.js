/**17. Escriba un programa JavaScript para calcular la diferencia absoluta entre un
número especificado y 19. Devuelve el triple de su diferencia absoluta si el número
especificado es mayor que 19. */

function num_diff(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

document.write(num_diff(50), "<br>");
document.write(num_diff(19), "<br>");
document.write(num_diff(7));