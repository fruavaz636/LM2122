<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables</title>
</head>
<body>
    <?php
        echo "Hola";
        echo "<b>Hola</b> a todos";
        print "<p>Hola print</p>\n";

        $saludo = "Holaaaa";
        echo $saludo;

        echo "<br/>Mensaje: " . $saludo . ". Fin del Mensaje<br/>";

        $a = 8;
        $b = 2;
        $c = 2;
        echo $a + $b . "<br/>";
        $resultado = $a - $b;
        echo $resultado;
        
        $a = $a + 1;
        $a++;
        $a += 1;

        $a = $a - 1;
        $a--;
        $a -= 1;
        
        $a = $a * 2;
        $a *= 2;
        echo $a;

        $tabla = ["valor1", "valor2"];
        $tabla2 = [["v1","v2"],["v3","v4"]];

        $correcto = false;
    ?>
    
    <?=$saludo ?>

    <?php
        echo "<br/>A: " . $a;
        echo "<br/>" . $tabla[1];
        echo "<br/>" . $tabla2[1][0];

        if ($correcto) {
            print "<p>Es correcto</p>";
        } else {
            print "<p>No es correcto</p>";
        }

        // Añadir un valor
        print $tabla[0] . " - " . $tabla[1];
        $tabla[] = "valor3";
        print $tabla[2];

        // Borrar un valor
        unset($tabla[2]);
        print $tabla[2];

        // Número de elementos
        echo "<br/>Nº ELEM: " . count($tabla);

        $numeros = [1,5,8,2,9];
        echo "<br/>MIN: " . min($numeros);
        echo "<br/>MAX: " . max($numeros);

        // Ordenar la tabla
        sort($numeros);
        print_r($numeros);

        if (in_array(88, $numeros)) {
            print "\nEstá";
        } else {
            print "\nNo Está";
        }

        print "<br/>";
        shuffle($numeros);
        print_r($numeros);
        
        print "<br/>";
        array_rand($numeros);
        print_r($numeros);

        define("PI", 3.14);
        echo "<br/>" . PI;

        print "<br/>" . PHP_INT_MAX;

        print "<pre>";
        print_r(get_defined_constants());
        print "</pre>";
    ?>
</body>
</html>