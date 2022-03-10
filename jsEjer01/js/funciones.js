function iniciar() {
    var opcion = prompt("¿Quién eres?");

    if (opcion=="mio") {
        document.getElementById("container").className="mio";
    } else if (opcion=="tuyo") {
        document.getElementById("container").className="tuyo";
    } else {
        document.getElementById("container").className="otro";
    }
}

window.addEventListener("load",iniciar,false);