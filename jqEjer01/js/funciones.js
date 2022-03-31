var numBorde = 1;

$(document).ready(function () {
   $("#titulo01").click(function () {
    $("#titulo01").addClass("primero");
    $("#titulo02").removeClass("segundo");   
   });

   $("#titulo02").click(function () {
    $("#titulo02").addClass("segundo");   
    $("#titulo01").removeClass("primero");   
   });

   $("#ocultar").click(function () {
      $("#lista1 li").hide();
   });

   $("#obtener").click(function () {
       alert($("#parrafo").text());
   });

   $("#modificar").click(function () {
        $("#parrafo").text("Nuevo Texto");
    });

    $("#modificarTD").click(function () {
       $("#tabla td").text("Texto del TD");
    });

    $("#aumentar").click(function () {
        numBorde++;
        $("#tabla2").css("border-width", numBorde);
        $("#tabla2 tr").css("border-width", numBorde);
        $("#tabla2 td").css("border-width", numBorde);
    });

    $("#reducir").click(function () {
        numBorde--;
        $("#tabla2").css("border-width", numBorde);
        $("#tabla2 tr").css("border-width", numBorde);
        $("#tabla2 td").css("border-width", numBorde);
    });
});