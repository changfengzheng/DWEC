/**17. Escriba un programa JavaScript para calcular la diferencia absoluta entre un
número especificado y 19. Devuelve el triple de su diferencia absoluta si el número
especificado es mayor que 19. */

const num_diff = (a) => {
    if ((a - 19) > 19) {
        return (a - 19) * 3;
    }
    return 19 - a;
}

document.write(num_diff(50), "<br>");
document.write(num_diff(19), "<br>");
document.write(num_diff(7));