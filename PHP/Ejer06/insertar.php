<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <?php

            $nombre = trim(htmlspecialchars($_REQUEST["nombre"], ENT_QUOTES, "UTF-8"));
            $email = trim(htmlspecialchars($_REQUEST["email"], ENT_QUOTES, "UTF-8"));
            $curso = trim(htmlspecialchars($_REQUEST["curso"], ENT_QUOTES, "UTF-8"));

            $conexion = mysqli_connect("localhost", "root", "Usuario?1234", "cursophp") 
                            or die("Problemas de Conexión");
            
            $sql = "INSERT INTO alumnos(nombre, mail, codigocurso) 
                            VALUES ('$nombre','$email','$curso')";

            mysqli_query($conexion, $sql) 
                        or die("Problemas en el insert: ".mysqli_error($conexion));

            mysqli_close($conexion);

            print "<h2>Alumn@ dado de Alta</h2>";
        ?>
    </div>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>