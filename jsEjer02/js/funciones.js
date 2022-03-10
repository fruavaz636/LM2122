function iniciar() {
    var titulo = document.getElementById("titulo");
    var texto = document.getElementById("texto");

    var capa = document.getElementById("capa");    
    if (document.getElementById("capa").className == "success") {
        document.getElementById("titulo").innerHTML = "CORRECTO";
        texto.innerHTML = "Los datos son correctos";
    } else if (capa.classList.contains("error")) {
        titulo.innerHTML = "ERROR";
        texto.innerHTML = "Ha surgido un error";
    } else if (capa.classList.contains("warning")) {
        titulo.innerHTML = "AVISO";
        texto.innerHTML = "Tenga cuidado";
    }
}

window.addEventListener("load",iniciar,false);