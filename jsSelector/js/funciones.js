function mostrarTexto(texto) {
    alert(texto);
}

function iniciar() {
    //alert(document.getElementById("usuario").value);
    /*var usu = prompt("Introduzca nombre:");
    alert("Hola " + usu + " .");*/

    /*var usu = prompt("Introduzca nombre:");
    document.getElementById("texto").innerHTML = "Hola " + usu + "<br/>";
    document.getElementById("texto").style = "font-weight: bold";*/

    /*var radios = document.getElementsByName("valores");
    for (let i = 0; i < radios.length; i++) {
        alert(radios[i].value);        
    }*/

    //document.getElementsByTagName("p")[0].innerHTML = "Primer P";
    //document.getElementsByTagName("p")[0].onclick = mostrarMensaje;

    //document.getElementsByClassName("clase")[1].onclick = mostrarTexto("Pulsado");

    //document.querySelector("#principal p:first-child").onclick = alerta;

    var coleccion = document.querySelectorAll("#principal p");
    var coleccion = document.getElementById("principal").querySelectorAll("p");
    for (let i = 0; i < coleccion.length; i++) {
        coleccion[i].innerHTML = "P " + (i);        
    }
}

function alerta() {
    alert("ALERTA");
}


function mostrarMensaje() {
    document.getElementById("texto").innerHTML = "Hola"; 
    document.getElementById("texto").className = "bordeYcolor";
}

function ocultar() {
    document.getElementById("principal").style = "display: none";
}

function mostrar() {
    document.getElementById("principal").style = "display: block"
}

window.addEventListener("load",iniciar,false);