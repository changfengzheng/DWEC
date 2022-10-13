class Factura {

    /* ... */
    static calcularDiferencia(factura1, factura2) {
        return factura1.total - factura2.total;
    }
}
const factura1 = new Factura(201, "Transportes SA", "eur", 542, 113);
const factura2 = new Factura(202, "Mudanzas SA", "eur", 100, 21);
console.log("La diferencia entre las facturas es de " + Factura.calcularDiferencia(factura1, factura2) + " eur");