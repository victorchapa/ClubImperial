<?php
	require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$nombre = $_POST['Nombre'];
	$fnacimiento = $_POST['FNacimiento'];
	$parentesco = $_POST['Parentesco'];
	$domicilio = $_POST['Domicilio'];
	$manzana = $_POST['Manzana'];
	$lote = $_POST['Lote'];
	$coto = $_POST['Coto'];
	$telefono = $_POST['Telefono'];
	$celular = $_POST['Celular'];
	$membresia = $_POST['Membresia'];
	$sangre = $_POST['Sangre'];
	$falta = $_POST['Coto'];
	//$Foto = $_POST['Foto'];
	$afiliacion = $_POST['Afiliacion'];
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
	mysql_query ("SET NAMES 'utf8'");
	mysql_query("INSERT INTO socios (Nombre, FNacimiento, Parentesco, Domicilio, Manzana, Lote, Coto, Telefono, Celular, Membresia, Sangre, FAlta, Afiliacion) 
		VALUES ('$nombre', '$fnacimiento', '$parentesco', '$domicilio', '$manzana', '$lote', '$coto', '$telefono', '$celular', '$membresia', '$sangre', '$falta', '$afiliacion')");
	echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
?>
</html>