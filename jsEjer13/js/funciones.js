function calcular() {
    var tipo = document.getElementById("tipo");
    var valor = tipo.options[tipo.selectedIndex].value;

    alert(valor);
}