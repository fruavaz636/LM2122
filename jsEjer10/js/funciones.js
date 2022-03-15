function ponerquitar(valor) {
    if (valor == 0) {
        document.getElementById("tabla").className = "conBorde";
    } else {
        document.getElementById("tabla").className = "sinBorde";
    }
}