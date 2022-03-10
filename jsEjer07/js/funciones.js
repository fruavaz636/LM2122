function calcular() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    var imc = peso / Math.pow(altura, 2);

    var texto = "";
    
    if (imc < 18.5) {
        texto = "Peso insuficiente";
    } else if (imc >= 18.5 && imc <= 24.9) {
        texto = "Normopeso";
    } else if (imc >= 25 && imc <= 26.9) {
        texto = "Sobrepeso grado I";
    } else if (imc >= 27 && imc <= 29.9) {
        texto = "Sobrepeso grado II (preobesidad)";
    } else if (imc >= 30 && imc <= 34.9) {
        texto = "Obesidad de tipo I";
    } else if (imc >= 35 && imc <= 39.9) {
        texto = "Obesidad de tipo II";
    } else if (imc >= 40 && imc <= 49.9) {
        texto = "Obesidad de tipo III (mórbida)";
    } else {
        texto = "Obesidad de tipo IV (extrema)";
    }

    document.getElementById("res").innerHTML = "Su IMC es " + imc + ". " + texto;
}