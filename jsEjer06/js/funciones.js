function calcular(op) {
    var resultado = "";
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (op == "+") {
        resultado = eval(num1 + num2);
    } else if (op == "-") {
        resultado = eval(num1 - num2);
    } else if (op == "*") {
        resultado = eval(num1 * num2);
    } else if (op == "/") {
        resultado = eval(num1 / num2);
    }

    document.getElementById("res").value = resultado;
}