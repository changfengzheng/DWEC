"use strict";

class Aeropuerto {
    constructor(nombre, ciudad, nVuelos) {

        this.nombre = nombre;
        this.ciudad = ciudad;
        this.vuelos = new Array();
        for (let i = 0; i < nVuelos; i++) {
            this.vuelos[i] = new Vuelo(i, "11:00", "12:00");
        }

    }
    cambiarHoraLLegada(n, nuevaHora) {
        this.vuelos[n].cambiarHoraLLegada(nuevaHora);
    }

    cambiarHoraSalida(n, nuevaHora) {
        this.vuelos[n].cambiarHoraSalida(nuevaHora);

    }

    compruebaLLegadaMayorSalida(n) {
        document.write("<tr><td colspan='4'>La hora de salida es posterior a la hora de llegada? " + this.vuelos[n].compruebaLLegadaMayorSalida() + "</tr>");
    }

}

class Vuelo {
    constructor(codigo, horaSalida, horaLLegada) {
        this.codigo = codigo;
        this.horaSalida = horaSalida;
        this.horaLLegada = horaLLegada;

    }
    cambiarHoraLLegada(nuevaHora) {
        this.horaLLegada = nuevaHora;
    }

    cambiarHoraSalida(nuevaHora) {
        this.horaSalida = nuevaHora;
    }

    compruebaLLegadaMayorSalida() {
        let lleg = this.horaLLegada.split(":");
        let sal = this.horaSalida.split(":");

        let hhlleg = parseInt(lleg[0]);
        let mmlleg = parseInt(lleg[1]);

        let hhsal = parseInt(sal[0]);
        let mmsal = parseInt(sal[1]);

        if (hhlleg > hhsal) {
            return true;
        }
        else if (hhlleg < hhsal) {
            return false;
        }
        else {
            return mmlleg > mmsal;

        }
    }


}

// Creamos un vuelo
var miAeropuerto = new Aeropuerto("CEED", "Valencia", 10);


document.write("<tr><td>" + miAeropuerto.nombre + "</td><td>" + miAeropuerto.ciudad + "</td><td>" + miAeropuerto.vuelos[1].horaSalida + "</td> <td>" + miAeropuerto.vuelos[1].horaLLegada + "</td></tr>");
miAeropuerto.compruebaLLegadaMayorSalida(1);

miAeropuerto.cambiarHoraSalida(1, "13:00");
document.write("<tr><td>" + miAeropuerto.nombre + "</td><td>" + miAeropuerto.ciudad + "</td><td>" + miAeropuerto.vuelos[1].horaSalida + "</td> <td>" + miAeropuerto.vuelos[1].horaLLegada + "</td></tr>");
miAeropuerto.compruebaLLegadaMayorSalida(1);


miAeropuerto.cambiarHoraLLegada(1, "14:00");
document.write("<tr><td>" + miAeropuerto.nombre + "</td><td>" + miAeropuerto.ciudad + "</td><td>" + miAeropuerto.vuelos[1].horaSalida + "</td> <td>" + miAeropuerto.vuelos[1].horaLLegada + "</td></tr>");
miAeropuerto.compruebaLLegadaMayorSalida(1);




