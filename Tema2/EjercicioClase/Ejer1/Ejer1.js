"use strict";

class Alumno {

    constructor(id, nombre, notaMedia) {
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    cambiarNotaMedia(nuevaNota) {
        this.notaMedia = nuevaNota;
    }

    consultarNota() {
        document.write("<tr><td>" + this.nombre + "</td><td>" + this.notaMedia + "</td></tr>");
    }


}

class Colegio {

    constructor(nombre, nAulas, nAlumnos) {

        this.nombre = nombre;
        this.nAulas = nAulas;

        this.arrayAlumnos = new Array();
        for (let i = 0; i < nAlumnos; i++) {
            this.arrayAlumnos[i] = new Alumno(i, "Alumno" + i, 7);
        }
    }
    consultarNotaMedia(n) {
        this.arrayAlumnos[n].consultarNota();
    }
    cambiarNotaMedia(n, nuevaNota) {
        this.arrayAlumnos[n].cambiarNotaMedia(nuevaNota);
    }
}


function main() {

    let miCole = new Colegio("Castillo de luna", 10, 10);

    //Cosultamos la nota media del alumno 1 y3
    miCole.consultarNotaMedia(1);
    miCole.consultarNotaMedia(3);

    //Cambiamos la nota media 
    document.write("<tr><td colspan='2'>Mostramos las notas media cambiada: </td></tr>");
    miCole.cambiarNotaMedia(1, 9);
    miCole.cambiarNotaMedia(3, 8);

    //Volvemos a consutarlo
    miCole.consultarNotaMedia(1);
    miCole.consultarNotaMedia(3);
}

main();