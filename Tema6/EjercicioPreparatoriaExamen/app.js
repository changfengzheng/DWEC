window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").onclick = comprobar;
    generateRandomNumbers();
}

/**
 * Funcion para ejecutar todos los funciones de comprobaciones
 */
function comprobar() {
    nombreValide()

    if (emailValide()) {
        document.getElementById("emailValide").innerHTML = "";
    } else {
        document.getElementById("emailValide").innerHTML = "Debes de introducir una email correcto";
    }

    if (passValide()) {
        document.getElementById("passValide").innerHTML = "";
    } else {
        document.getElementById("passValide").innerHTML = "La contraseña debe tener al menos 8 caracteres y que uno sea un digito";
    }

    passRepetValide()

    if (sumValide()) {
        document.getElementById("sumValide").innerHTML = "";
    } else {
        document.getElementById("sumValide").innerHTML = "La suma es incorrecta";
    }

}

/**
 * Funcion para validar el nombre
 * @returns true/false
 */
let nombreValide = () => {
    var nombre = document.getElementById("nombre");

    if (nombre.value == "") {
        document.getElementById("nombreValide").innerHTML = "Debes de escibir un nombre";
        return false;
    } else {
        nombre.focus();
    }

    document.getElementById("nombreValide").innerHTML = "";
    return true;
};

/**
 * Funcion para comprobar si el un email
 * @returns true/false
 */
let emailValide = () => {
    var email = document.getElementById("email");

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(String(email.value).toLowerCase())) {
        return true;
    } else {
        email.focus();
    }
    return false;
};

/**
 * Funcion para comprobar la condiciones de la contraseña
 * @returns true/false
 */
let passValide = () => {
    var password = document.getElementById("password");

    const regex = /^(?=.*\d).{8,}$/;

    if (regex.test(password.value)) {
        return true;
    } else {
        password.focus();
    }
    return false;
};

/**
 * Funcion para comprabar si la contraseña es introducida es igual
 * @returns true/false
 */
let passRepetValide = () => {

    var password1 = document.getElementById("password");
    var password2 = document.getElementById("password2");

    if (password1.value == password2.value) {
        document.getElementById("passRepetValide").innerHTML = "";
        return true;
    }
    document.getElementById("passRepetValide").innerHTML = "Debes de repetir la contraseña";
    password2.focus();
    return false;
};


/**
 * Funcion para genera los numeros 
 */
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

function generateRandomNumbers() {

    document.getElementById("suma").innerHTML = num1 + " + " + num2 + " = ";
}

/**
 * Funcion para comprobar la suma
 * @returns true/false
 */
let sumValide = () => {

    var resultado = document.getElementById("math-operation");

    if (resultado.value == (num1 + num2)) {
        return true;
    }
    password.focus();
    return false;
};


