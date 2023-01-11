//Funcion para validar los campos
function validaCampos(form) {

    //expresiones regulares para comprobar datos
    let regexPass = /^[A-Z](?=.*?[0-9]).{6,}$/;
    let regexDni = /^\d{8}[A-Z]$/;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|g\.educaand\.es)$/;
    let regexEmailAdmin = /^[a-zA-Z0-9._%+-]+@g\.educaand\.es$/;

    //Condicion para comprobar el dni
    if (regexDni.test(form.dni.value) == false) {
        document.getElementById("errorDni").innerHTML = "El DNI introducido no es válido"
        document.getElementById("dni").focus();
        return false;
    } else {
        document.getElementById("errorDni").innerHTML = ("");
    }

    //Condicion para comprobar el correo
    let checkboxAdmin = document.getElementById('administrador');

    if (checkboxAdmin.checked) {
        if (regexEmailAdmin.test(form.email.value) == false) {
            document.getElementById("errorEmail").innerHTML = "NO PUEDES SER ADMIN"
            document.getElementById("email").focus();
            return false;
        } else {
            document.getElementById("errorEmail").innerHTML = ("");
        }
    } else {
        if (regexEmail.test(form.email.value) == false) {
            document.getElementById("errorEmail").innerHTML = "El EMAIL deben ser de gmail.com o de g.educaand.es"
            document.getElementById("email").focus();
            return false;
        } else {
            document.getElementById("errorEmail").innerHTML = ("");
        }
    }

    //Condicion para comprobar si cumple la contraseña
    if (regexPass.test(form.pass1.value) == false) {
        document.getElementById("errorPass1").innerHTML = "La contraseña debe empezar por una letra mayúscula, tener un mínimo de 7 caracteres y contener contener, al menos, un dígito"
        document.getElementById("pass1").focus();
        return false;
    } else {
        document.getElementById("errorPass1").innerHTML = ("");
    }

    //Condicion para comprobar si coindicen las contraseñasv
    if (form.pass1.value != form.pass2.value) {
        document.getElementById("errorPass2").innerHTML = "Las contraseñas escritas no coinciden, vuelve a intentarlo"
        document.getElementById("pass1").focus();
        return false;
    } else {
        document.getElementById("errorPass2").innerHTML = ("");
    }

    //Condicion para comprobar el indicio de la contraseña
    if (form.indicio.value == "") {
        document.getElementById("errorIndicio").innerHTML = "Debes de proporcionar un indicio de contraseña"
        document.getElementById("indicio").focus();
        return false;
    } else {
        //Creamos un array para meter los 3 primeros caracteres de la contraseña
        let tresPrimerosCaract = [];
        let cumple = true;
        //Añadimos los 3 primeros caracteres en el array
        for (let i = 0; i < 3; i++) {
            tresPrimerosCaract.push(form.pass1.value[i]);
        }
        //Recorremos el array de caracteres y comprobamos y lo incluye en el indicio proporcionado
        tresPrimerosCaract.forEach(caracter => {
            if (!form.indicio.value.includes(caracter)) {
                cumple = false;
            }
        });

        if (cumple == true) {
            document.getElementById("errorIndicio").innerHTML = ("");
        } else {
            document.getElementById("errorIndicio").innerHTML = "El indicio de contraseña no es valido"
            document.getElementById("indicio").focus();
            document.getElementById("indicio").select();
            return false;
        }
    }

    //Mostramos una alerta si todo los campos son correctos
    alert("USUARIO VALIDO");
}