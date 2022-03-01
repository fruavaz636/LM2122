function comprobar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var mayor = "";
    var menor = "";
    var central = "";

    var resultado = "";

    if ((num1 > num2) && (num1 > num3)) {
        mayor = num1;
        if (num2 > num3) {
            central = num2;
            menor = num3;
        } else {
            central = num3;
            menor = num2;
        }
    } else if ((num2 > num1) && (num2 > num3)) {
        mayor = num2;
        if (num1 > num3) {
            central = num1;
            menor = num3;
        } else {
            central = num3;
            menor = num1;
        }
    } else if ((num3 > num1) && (num3 > num2)){
        mayor = num3;
        if (num1 > num2) {
            central = num1;
            menor = num2;
        } else {
            central = num2;
            menor = num1;
        }
    }

    resultado = "<li>El mayor es: " 
                + mayor 
                + "</li><li>El central es: " 
                + central 
                + "</li><li>El menor es:"
                + menor
                + "</li>";

    document.getElementById("res").innerHTML = resultado;
}

function repetir() {
    var frase = document.getElementById("frase").value;
    var num = parseInt(document.getElementById("num").value);

    var resultado = "";

    for (let i = 0; i < num; i++) {
        resultado = resultado + (i+1) + ". " + frase + "<br>";
    }

    document.getElementById("res2").innerHTML = resultado;
}