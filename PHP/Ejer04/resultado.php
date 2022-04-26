<?php

$temp = trim(htmlspecialchars($_REQUEST["temp"], ENT_QUOTES, "UTF-8"));
$opc = trim(htmlspecialchars($_REQUEST["opciones"], ENT_QUOTES, "UTF-8"));

if (empty($temp)) {
    print "<p>Rellena la temperatura</p>";
} else if ($opc == "c" && $temp < -273.15) {
    print "<p>Temperatura Celsius Incorrecta</p>";
} else if ($opc == "f" && $temp < -459.67) {
    print "<p>Temperatura Fahrenheit Incorrecta</p>";
} else {
    if ($opc == "c") {
        $result = ($temp * 1.8)+32;
        print "<p>$temp grados celsius son $result grados fahrenheit</p>";
    } else {
        $result = ($temp - 32) / 1.8;
        print "<p>$temp grados fahrenheit son $result grados celsius</p>";
    }
}

?>