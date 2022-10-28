"use strict";

class Hospital {
    //Constuctor del hospital
    constructor(nombre, ciudad, nPacientes) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pacientes = new Array();

        for (let i = 0; i < nPacientes; i++) {
            this.pacientes[i] = new Paciente(i, "Paciente" + i, "Constipado");
        }
    }

    //Imprimos todos los pacientes
    imprimirPacientes() {
        for (let i = 0; i < this.pacientes.length; i++) {
            document.write("Dni:" + this.pacientes[i].dni + ", Nombre: " + this.pacientes[i].nombre + ", Enfermedad: " + this.pacientes[i].enfermedad);
            document.write("<br>");
        }
    }

    //Metodo para eliminar un paciente
    darDeAlta(codigo) {
        for (let i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].dni == codigo) {
                this.pacientes.splice(i, 1);
            }
        }
    }
}


class Paciente {
    constructor(dni, nombre, enfermedad) {
        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }

}

let miHospi = new Hospital("CEED", "Valencia", 10);

document.write("<tr><td>" + miHospi.nombre + "</td><td>" + miHospi.ciudad + "</td><td>" + miHospi.pacientes.length + "</td><td>");
miHospi.imprimirPacientes();
document.write("</td></tr>");

document.write("<tr><td colspan='4'>Borramos el paciente con el dni 5. Nuevos pacientes: </td></tr>");
miHospi.darDeAlta(5);


document.write("<tr><td>" + miHospi.nombre + "</td><td>" + miHospi.ciudad + "</td><td>" + miHospi.pacientes.length + "</td><td>");
miHospi.imprimirPacientes();
document.write("</td></tr>");




