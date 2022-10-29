// La empresa AMT nos pide una organizacion del alumnado en habitaciones de 3.

// De cada alumno se debe saber el nombre, el apellido y su DNI.

// AMT tiene 3 residencias en Malta y necesita saber como organizar al alumnado para 
// poder insertar, eliminar o cambiar a los alumnos entre los centros.

// Puedes utilizar un planteamiento similar a los usados en Residenciaes y Alumnos.

"use strict";

class Residencia {
    //Constuctor del Residencia
    constructor(nombre, ciudad, nAlumnos) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.Alumnos = new Array();

        for (let i = 0; i < nAlumnos; i++) {
            this.Alumnos[i] = new Alumno(i, "Alumno" + i, "Apellido" + i);
        }
    }

    //Imprimos todos los Alumnos
    imprimirAlumnos() {
        for (let i = 0; i < this.Alumnos.length; i++) {
            document.write("Dni:" + this.Alumnos[i].dni + ", Nombre: " + this.Alumnos[i].nombre + ", apellido: " + this.Alumnos[i].apellido);
            document.write("<br>");
        }
    }

    //Metodo para eliminar un Alumno
    eliminarAlumnos(codigo) {
        for (let i = 0; i < this.Alumnos.length; i++) {
            if (this.Alumnos[i].dni == codigo) {
                this.Alumnos.splice(i, 1);
            }
        }
    }
}


class Habitaciones {
    //Constuctor del Residencia
    constructor(idResidencia, idHabitacion, nAlumnos) {
        this.idHabitacion = idResidencia;
        this.idHabitacion = idHabitacion;
        this.Alumnos = new Array();

        for (let i = 0; i < nAlumnos; i++) {
            this.Alumnos[i] = new Alumno(i, "Alumno" + i, "Apellido" + i);
        }
    }

}



class Alumno {
    constructor(dni, nombre, apellido, idResidencia, idHabitacion) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.idHabitacion = idResidencia;
        this.idHabitacion = idHabitacion;
    }

}
