class Puerto {
    //Constuctor del Puerto
    constructor(nombre, idPuerto) {
        this.nombre = nombre;
        this.idPuerto = idPuerto;
    }
}

class Hotel {
    //Constuctor del Hotel
    constructor(nombre, idHotel) {
        this.nombre = nombre;
        this.idHotel = idHotel;
        this.habitaciones = new Array();

        //Creamos las Habitaciones 
        for (let i = 0; i < 10; i++) {
            this.habitaciones[i] = new Habitaciones(i);
        }
    }

    cambiarHotel(cliente) {
        this.habitaciones[1].insertarCliente(cliente);
    }

    //Para mostrar hotel 
    mostrarHotel() {
        document.write("<table><table><tr><th>ID Habitación</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>DNI</th></tr>");
        for (let i = 0; i < this.habitaciones.length; i++) {
            for (let x = 0; x < this.habitaciones[i].clientes.length; x++) {
                document.write("<tr><td>" + this.habitaciones[i].idHab + "</td><td>" +
                    this.habitaciones[i].clientes[x].nombre + "</td><td>" +
                    this.habitaciones[i].clientes[x].apellido + "</td><td>" +
                    this.habitaciones[i].clientes[x].edad + "</td><td>" +
                    this.habitaciones[i].clientes[x].dni + "</td></tr>");
            }
        }
        document.write("</table>");
    }
}

class Habitaciones {

    //Constructor de Habitaciones 
    constructor(idHab) {
        this.idHab = idHab;
        this.clientes = [];
    }

    //Insetar clientes
    insertarCliente(Cliente) {


        if (this.clientes.length == 3) {
            document.write("<h4>No se pudo insetar el cliente, la habitación ya está llena.</h4>");
        } else {
            this.clientes.push(Cliente);
        }

        // if (Cliente.edad >= 18 && Cliente.edad  <= 25) {
        //     hotel1.Habitaciones[0].clientes.push(Cliente);
        // } else {
        //     if (Cliente.edad  >= 26 && Cliente.edad  <= 35) {
        //         hotel2.Habitaciones[0].clientes.push(Cliente);
        //     } else {
        //         if (Cliente.edad  >= 26 && Cliente.edad  <= 35) {
        //             hotel3.Habitaciones[0].clientes.push(Cliente);
        //         } else {
        //             document.write("<h4>No tienes la edad suficiente.</h4>");
        //         }
        //     }
        // }
    }

    //Eliminar Cliente
    eliminarCliente(Cliente) {
        let x = this.clientes.indexOf(Cliente);
        this.clientes.splice(x, 1);
    }
}

class Cliente {
    //Contructor de Cliente
    constructor(nombre, apellido, dni, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
    }
}


//Creamos las Puertos
let puerto1 = new Puerto("Puerto 1", 1);
let puerto2 = new Puerto("Puerto 2", 2);
let puerto3 = new Puerto("Puerto 3", 3);

//Creamos las Hoteles
let hotel1 = new Hotel("Hotel 1", 1);
let hotel2 = new Hotel("Hotel 2", 2);
let hotel3 = new Hotel("Hotel 3", 3);

//Insertamos los clientes de las habitaciones en Hotel 1
hotel1.habitaciones[0].insertarCliente(new Cliente("Pepe", "Gomez", "y1686581", 25));
hotel1.habitaciones[0].insertarCliente(new Cliente("Carlos", "Gomez", "y168652", 25));
hotel1.habitaciones[1].insertarCliente(new Cliente("Juan", "Gomez", "y1686583", 80));
hotel1.habitaciones[1].insertarCliente(new Cliente("Adrian", "Gomez", "y1686584", 28));
hotel1.habitaciones[1].insertarCliente(new Cliente("Manuel", "Gomez", "y1686585", 30));


//Insertamos los clientes de las habitaciones en Hotel 2
hotel2.habitaciones[0].insertarCliente(new Cliente("Lucia", "Gomez", "y1686581", 25));
hotel2.habitaciones[0].insertarCliente(new Cliente("carlas", "Gomez", "y168652", 50));
hotel2.habitaciones[1].insertarCliente(new Cliente("Juan", "Gomez", "y1686583", 60));
hotel2.habitaciones[1].insertarCliente(new Cliente("maria", "Gomez", "y1686584", 12));
hotel2.habitaciones[1].insertarCliente(new Cliente("Manuel", "Gomez", "y1686585", 2));

//Mostramos los hoteles
document.write("<h2>Tabla de todos los hoteles</h2>");
document.write("<table><tr><th>Nombre Hotel</th><th>ID Hotel</th><th>Números de Habitaciones</th></tr>");
document.write("<tr><td>" + hotel1.nombre + "</td><td>" + hotel1.idHotel + "</td><td>" + hotel1.habitaciones.length + "</td></tr>");
document.write("<tr><td>" + hotel2.nombre + "</td><td>" + hotel2.idHotel + "</td><td>" + hotel2.habitaciones.length + "</td></tr>");
document.write("<tr><td>" + hotel3.nombre + "</td><td>" + hotel3.idHotel + "</td><td>" + hotel3.habitaciones.length + "</td></tr></table>");


document.write("<h2>Tablas de todos los clientes de hotel1</h2>");
hotel1.mostrarHotel();

document.write("<h2>Tablas de todos los clientes de hotel2</h2>");
hotel2.mostrarHotel();

document.write("<h3>A continuación vamos ha borrar el primer alumno de la habitacion0 del hotel2</h3>");
//Eliminamos alumno
hotel2.habitaciones[0].eliminarCliente(hotel2.habitaciones[0].clientes[1]);
hotel2.mostrarHotel();

