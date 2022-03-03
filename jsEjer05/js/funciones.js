var aleatorio = parseInt(Math.random() * 10) + 1;
var intentos = 3;

function calcular() {
    var base = parseInt(document.getElementById("base").value);
    var exponente = parseInt(document.getElementById("exponente").value);    

    var resultado = Math.pow(base, exponente);

    document.getElementById("res").innerHTML = resultado;
}

function comprobar() {
    var numero = parseInt(document.getElementById("numero").value);

    var resultado = "";

    if (intentos > 0) {
        if (numero > aleatorio) {
            intentos = intentos - 1;
            resultado = "Tu número es mayor. Intentos restantes = " + intentos;            
        } else if (numero < aleatorio) {
            intentos = intentos - 1;
            resultado = "Tu número es menor. Intentos restantes = " + intentos;
        } else {
            resultado = "!!! Has Acertado ¡¡¡";
        }
    } else {
        resultado = "Te has quedado sin intentos. Fin";
    }

    document.getElementById("res2").innerHTML = resultado;
}