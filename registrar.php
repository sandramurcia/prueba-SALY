<?php
include('conexiondb.php');

//hacemos llamado al imput de formuario
$nombre = $_POST["nombre"] ;
$apellidos = $_POST["apellidos"] ;
$usuario = $_POST["nombre_usuario"] ;
$email = $_POST["email"] ;
$contraseña = $_POST["contraseña"] ;
$contraseña1 = $_POST["contraseña1"] ;
$grado = $_POST["grado"] ;
//verificamos la conexion a base datos
if(!$conexion) 
        {
            //'alert("Error al crear sugerencia")';
            echo 'alert("Error al crear sugerencia'. mysql_error();
        }
  else
        {
            echo '<script>alert("Conexion establecida");</script>';
        }
        //indicamos el nombre de la base datos
        $datab = "libaoo";
        //indicamos selecionar a la base datos
        $db = mysqli_select_db($conexion,$datab);

        if (!$db)
        {
        echo "No se ha podido encontrar la Tabla";
        }
        //insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
        $instruccion_SQL="INSERT INTO usuarios( nombre, apellidos, nombre_usuario, contraseña,email,grado)
         VALUES ('$nombre','$apellidos','$usuario','$contraseña','$email','$grado')";            
                            
        $resultado = mysqli_query($conexion,$instruccion_SQL);
        $consulta = "SELECT * FROM usuarios";
        
$result = mysqli_query($conexion,$consulta);
if(!$result) 
{
    echo "No se ha podido realizar la consulta";
}
    echo "<script>alert('Usuario registrado exitosamente: $usuario');window.location='index.html'</script>";

/*echo "<table border='2'>";
echo "<tr>";
echo "<th><h1>id</th></h1>";
echo "<th><h1>Nombre</th></h1>";
echo "<th><h1>Apellidos</th></h1>";
echo "<th><h1>Usuario</th></h1>";
echo "<th><h1>Correo electronico</th></h1>";
echo "<th><h1>Grado</th></h1>";
echo "</tr>";

while ($colum = mysqli_fetch_array($result))
 {
    echo "<tr>";
    echo "<td><h2>" . $colum['id_usuarios']. "</td></h2>";
    echo "<td><h2>" . $colum['nombre']. "</td></h2>";
    echo "<td><h2>" . $colum['apellidos'] . "</td></h2>";
    echo "<td><h2>" . $colum['nombre_usuario'] . "</td></h2>";
    echo "<td><h2>" . $colum['email'] . "</td></h2>";
    echo "<td><h2>" . $colum['grado'] . "</td></h2>";
    echo "</tr>";
}
echo "</table>";

mysqli_close( $conexion );

   //echo "Fuera " ;
   echo'<a href="index.html"> Volver Atrás</a>';
*/

?>