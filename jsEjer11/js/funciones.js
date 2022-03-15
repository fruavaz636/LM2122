var mayor = 0 //Number.MIN_VALUE
var menor = 0 //Number.MAX_VALUE
var sumaPositivos = 0;
var sumaNegativos = 0;

function anadir(numero) {
    if (numero > mayor) {
        mayor = numero;
    } else if (numero < menor) {
        menor = numero;
    } 

    if (numero > 0) {
        sumaPositivos += numero;
    } else if (numero < 0) {
        sumaNegativos += numero;
    }
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}

function final() {
    var res = document.getElementById("resultado");
    res.innerHTML = "Mayor: " + mayor 
                    + "<br/>Menor: " + menor 
                    + "<br/>Suma Positivos: " + sumaPositivos 
                    + "<br/>Suma Negativos: " + sumaNegativos;
    
    inicializar();
}

function inicializar() {
    mayor = 0;
    menor = 0;
    sumaPositivos = 0;
    sumaNegativos = 0;
}