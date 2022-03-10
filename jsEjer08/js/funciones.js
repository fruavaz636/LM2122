function mostrar(num) {
    var texto = "<h3>Tabla del " + num + "</h3>";

    for (let i = 1; i <= 10; i++) {
        texto = texto + num + " * " + i + " = " + (num*i) + "<br/>";
    }

    document.getElementById("res").innerHTML = texto;
}

function mostrarTodas() {
    var textoT = "";

    for (let i = 1; i <= 10; i++) {
        textoT = textoT + "<h3>Tabla del " + i + "</h3>";
        for (let j = 1; j <= 10; j++) {
            textoT = textoT + i + " * " + j + " = " + (i*j) + "<br/>";
        }        
    }
    
    document.getElementById("tablas").innerHTML = textoT;
}

window.addEventListener("load", mostrarTodas, false);