function validar() {
    var correcto = true;
    var texto = "";

    var res = document.getElementById("resultado");
    res.innerHTML = "";

    var correo = document.getElementById("correo").value;
    var web = document.getElementById("web").value;
    var edad = document.getElementById("edad").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;

    /*if (correo.length == 0 || correo == "" 
        || web.length == 0 || web == "" 
        || edad.length == 0 || edad == "" 
        || pass.length == 0 || pass == "" 
        || repass.length == 0 || repass == "") {
        texto += "<li>Debe rellenar todos los campos</li>";
        correcto = false;
    } else if (String(correo).indexOf("@") == -1 && 
                String(correo).indexOf(".") == -1 && 
                String(correo).indexOf("@") < String(correo).indexOf(".")) {

    } */
    
    if (String(correo).indexOf("@") == -1) {
        texto += "<li>@ necesaria en email</li>";
        correcto = false;
    } else {
        var posA = String(correo).indexOf("@");
        var posPunto = String(correo).indexOf(".", posA);
        if (posPunto == -1 || posPunto == posA + 1 
                    || posPunto == String(correo).length-1) {
            texto += "<li>Punto incorrecto en email</li>";
            correcto = false;
        }
    }

    if (!String(web).startsWith("http://")) {
        texto += "<li>Web debe comenzar por http://</li>";
        correcto = false;
    }

    if (parseInt(edad) <= 0) {
        texto += "<li>Edad incorrecta</li>";
        correcto = false;
    }

    if (String(pass) != String(repass)) {
        texto += "<li>Deben ser iguales</li>";
        correcto = false;
    }

    if (String(pass).localeCompare(String(repass)) != 0) {
        texto += "<li>Deben ser iguales</li>";
        correcto = false;
    }
    
    res.innerHTML = texto;

    return correcto;
}