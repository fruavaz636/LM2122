function validar(campo) {
    //var campo = document.getElementById("nombre");
    //alert(campo.value);
    if (campo.value == null || campo.value == "" || campo.value.length == 0) {
        //campo.style = "border: 2px solid red";
        //campo.focus();

        mostrarError("spnombre", "Error: Nombre vacío");
    } else {
        //campo.style = "";

        borrarError("spnombre");
    }
}

function mostrarError(nombreSpan, mensaje) {
    document.getElementById(nombreSpan).innerHTML = mensaje;
}

function borrarError(nombreSpan) {
    document.getElementById(nombreSpan).innerHTML = "";
}

function validarFormulario() {
    var cadenaError = "";

    var nombre = document.getElementById("nombre");
    if (nombre.value == null || nombre.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: nombre vacío</li>";
    } 

    var postal = document.getElementById("postal");
    if (postal.value == null || postal.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: cód postal vacío</li>";
    } else if (postal.value.length != 5) {
        cadenaError = cadenaError + "<li>Error: cód postal de 5 cifras</li>";
    }

    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: teléfono vacío</li>";
    } else if (tel.value.length != 9) {
        cadenaError = cadenaError + "<li>Error: teléfono de 9 cifras</li>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
        cadenaError = cadenaError + "<li>Error: teléfono 9 o 6</li>";
    }

    if (cadenaError.length == 0) {
        return true;
    } else {
        document.getElementById("capaerrores").style.visibility = "visible";
        mostrarError("sperrores", cadenaError);
        return false;
    }
}

function mostrarEdad(campoEdad) {
    document.getElementById("spedad").innerHTML = campoEdad.value;
} 