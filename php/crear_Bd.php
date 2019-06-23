<?php 
$servidor ="localhost";
$usuario ="root";
$contraseña ="12345678";

//Se crea la conexion con la base de datos

$conexion = mysqli_connect($servidor,$usuario,$contraseña);

//Verificar la conexion

if(!$conexion){
      die("No es posible conectarse a la base de datos: ". mysqli_connect_error());
}

//Creacion de la base de datos

$sql = "CREATE DATABASE bdunad9";
if(mysqli_query($conexion,$sql)){
      echo "Base de datos creada exitosamente";

}


else{
      echo "Error al crear la base de datos: ". mysqli_error($conexion);

}

mysqli_close($conexion);
?>