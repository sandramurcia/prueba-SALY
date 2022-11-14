<?php

include('conexiondb.php');

$usuario=$_POST['nombre_usuario'];
$contraseña=$_POST['contraseña'];


$consulta = "SELECT * FROM usuarios where nombre_usuario = '$usuario' and contraseña ='$contraseña' ";
$resultado= mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
    header("location:interfazsecundaria/inicio.html");

}else{
    include("index.html");
    ?>
    <h1>ERROR DE AUTENTIFICACION</h1>
    <?php
    
}
mysqli_free_result($resultado);
mysqli_close($conexion);
?>