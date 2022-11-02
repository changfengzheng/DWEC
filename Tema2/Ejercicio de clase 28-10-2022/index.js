// La empresa AMT nos pide una organizacion del alumnado en habitaciones de 3.

// De cada alumno se debe saber el nombre, el apellido y su DNI.

// AMT tiene 3 residencias en Malta y necesita saber como organizar al alumnado para 
// poder insertar, eliminar o cambiar a los alumnos entre los centros.

// Puedes utilizar un planteamiento similar a los usados en Residenciaes y Alumnos.


class Residencia {

    //Constuctor del Residencia
    constructor(nombre, idResid, numHabit) {
        this.nombre = nombre;
        this.idResid = idResid;
        this.habitaciones = new Array();

        //Creamos las habitaciones 
        for (let i = 0; i < numHabit; i++) {
            this.habitaciones[i] = new Habitaciones(i);
        }
    }

    mostrarResid() {
        document.write("<table><table><tr><th>ID Habitación</th><th>Nombre</th><th>Apellido</th><th>DNI</th></tr>");
        
        for (let i = 0; i < this.habitaciones.length; i++) {
            for (let x = 0; x < this.habitaciones[i].alumnos.length; x++) {
                document.write("<tr><td>" + this.habitaciones[i].idHab + "</td><td>" +
                    this.habitaciones[i].alumnos[x].nombre + "</td><td>" +
                    this.habitaciones[i].alumnos[x].apellido + "</td><td>" +
                    this.habitaciones[i].alumnos[x].dni + "</td></tr>");
            }
        }
        document.write("</table>");
    }
}

class Habitaciones {

    //Constructor de habitacion 
    constructor(idHab) {
        this.idHab = idHab;
        this.alumnos = [];
    }

    //Insetar alumnos
    insertarAlumno(alumno) {
        if (this.alumnos.length == 3) {
            document.write("<h4>No se pudo insetar el alumano, la habitación ya está llena.</h4>");
        } else {
            this.alumnos.push(alumno);
        }
    }

    //Eliminar alumno
    eliminarAlumno(alumno) {
        let x = this.alumnos.indexOf(alumno);
        this.alumnos.splice(x, 1);
    }

    //Cambiar de habitacion
    cambiarHab(alumno, habOriginal, habDestino) {
        let tmp = habOriginal.alumnos.indexOf(alumno);
        let alumnoACambiar = habDestino.alumnos[tmp];

        habDestino.alumnos[tmp] = habOriginal.alumnos[tmp];
        habOriginal.alumnos[tmp] = alumnoACambiar;
    }
}

class Alumno {
    //Contructor de alumno
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

//Creamos las residencias
let residencia1 = new Residencia("Residencia 1", 1, 2);
let residencia2 = new Residencia("Residencia 2", 2, 4);
let residencia3 = new Residencia("Residencia 3", 3, 5);

//Insertamos los alumnos de las habitaciones en residencia 1
residencia1.habitaciones[0].insertarAlumno(new Alumno("Pepe", "Gomez", "y1686581"));
residencia1.habitaciones[0].insertarAlumno(new Alumno("Carlos", "Gomez", "y168652"));
residencia1.habitaciones[1].insertarAlumno(new Alumno("Juan", "Gomez", "y1686583"));
residencia1.habitaciones[1].insertarAlumno(new Alumno("Adrian", "Gomez", "y1686584"));
residencia1.habitaciones[1].insertarAlumno(new Alumno("Manuel", "Gomez", "y1686585"));


//Insertamos los alumnos de las habitaciones en residencia 2
residencia2.habitaciones[0].insertarAlumno(new Alumno("Lucia", "Gomez", "y1686581"));
residencia2.habitaciones[0].insertarAlumno(new Alumno("carlas", "Gomez", "y168652"));
residencia2.habitaciones[1].insertarAlumno(new Alumno("Juan", "Gomez", "y1686583"));
residencia2.habitaciones[1].insertarAlumno(new Alumno("maria", "Gomez", "y1686584"));
residencia2.habitaciones[1].insertarAlumno(new Alumno("Manuel", "Gomez", "y1686585"));

//Mostramos las residencias
document.write("<h2>Tabla de las residencias que tiene AMT</h2>");
document.write("<table><tr><th>Nombre Residencia</th><th>ID Residencia</th><th>Números de Habitaciones</th></tr>");
document.write("<tr><td>" + residencia1.nombre + "</td><td>" + residencia1.idResid + "</td><td>" + residencia1.habitaciones.length + "</td></tr>");
document.write("<tr><td>" + residencia2.nombre + "</td><td>" + residencia2.idResid + "</td><td>" + residencia2.habitaciones.length + "</td></tr>");
document.write("<tr><td>" + residencia3.nombre + "</td><td>" + residencia3.idResid + "</td><td>" + residencia3.habitaciones.length + "</td></tr></table>");


//Mostramos todos los datos de la residencia1

document.write("<h2>Tabla de los alumnos y sus habitaciones de la residencia1</h2>");
residencia1.mostrarResid();

//Añadimos un alumno en cada habiatacion de la residencia1, en la habitacion1 no se podra 
//añadir ya esta llena, la habitaciones1 se añadirá correctamente
document.write("<h3>Añadimos un alumno en cada habiatacion de la residencia1, en la habitacion1 no se podra añadir ya esta llena, la habitaciones1 se añadirá correctamente</h3>");

//insertamos nuevos alumnos a cada habitacion
residencia1.habitaciones[0].insertarAlumno(new Alumno("Nuevo", "Nuevo", "y1686586"));
residencia1.habitaciones[1].insertarAlumno(new Alumno("Nuevo", "Gomez", "y1686585"));

//Mostramos todos los datos de la residencia1
residencia1.mostrarResid();

//A continuación vamos ha borrar el primer alumno de la habitacion0
//y cambiamos de habitacion a juan con pepe
document.write("<h3>A continuación vamos ha borrar el primer alumno de la habitacion0 y cambiamos de habitacion a juan con pepe</h3>");

//Eliminamos alumno
residencia1.habitaciones[0].eliminarAlumno(residencia1.habitaciones[0].alumnos[1]);
//Cambiamos alumno
residencia1.habitaciones[0].cambiarHab(residencia1.habitaciones[0].alumnos[0], residencia1.habitaciones[0], residencia1.habitaciones[1]);

//Mostramos todos los datos de la residencia1
residencia1.mostrarResid();

//Mostramos la residencia 2
document.write("<h2>Tabla de los alumnos y sus habitaciones de la residencia2</h2>");
residencia2.mostrarResid();


