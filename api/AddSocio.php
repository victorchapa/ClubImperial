<?php
	require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$Nombre = $_POST['Nombre']);
	$FNacimiento = $_POST['FNacimiento']);
	$Parentesco = $_POST['Parentesco']);
	$Domicilio = $_POST['Domicilio']);
	$Manzana = $_POST['Manzana']);
	$Lote = $_POST['Lote']);
	$Coto = $_POST['Coto']);
	$Telefono = $_POST['Telefono']);
	$Celular = $_POST['Celular']);
	$Membresia = $_POST['Membresia']);
	$Sangre = $_POST['Sangre']);
	$FAlta = $_POST['Coto']);
	$Foto = $_POST['Foto']);
	$Afiliacion = $_POST['Afiliacion']);
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
	mysql_query ("SET NAMES 'utf8'");
	mysql_query("INSERT INTO socios (Nombre, FNacimiento, Domicilio, Manzana, Lote, Coto, Telefono, Celular, Membresia, Sangre, FAlta, Foto, Afiliacion) 
		VALUES ('$Nombre', '$FNacimiento', '$Parentesco', '$Domicilio', '$Manzana', '$Lote', '$Coto', '$Telefono', '$Celular', '$Membresia', '$Sangre', '$FAlta', '$Foto', '$Afiliacion')");
	echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
?>
</html>