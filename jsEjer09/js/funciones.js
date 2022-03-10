function comprobar(num) {
    if (esprimo(num)) {
        document.getElementById("res").innerHTML = num + " es primo";
    } else {
        document.getElementById("res").innerHTML = num + " no es primo";
    }
}

function esprimo(num) {
    var es = true;

    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            es = false;
        }        
    }

    return es;
}