<?php
	require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$idsocio = $_POST['IdSocio']; 
	$nombre = $_POST['Nombre'];
	$apellidop = $_POST['ApellidoP'];
	$apellidom = $_POST['ApellidoM'];
	$fnacimiento = $_POST['FNacimiento'];
	$domicilio = $_POST['Domicilio'];
	$manzana = $_POST['Manzana'];
	$lote = $_POST['Lote'];
	$coto = $_POST['Coto'];
	$telefono = $_POST['Telefono'];
	$celular = $_POST['Celular'];
	$membresia = $_POST['Membresia'];
	$tipomembresia = $_POST['TipoMembresia'];
	$sangre = $_POST['Sangre'];
	$falta = $_POST['FAlta'];
	$afiliacion = implode(', ', $_POST['Afiliacion']);
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
	mysql_query ("SET NAMES 'utf8'");
	mysql_query("INSERT INTO parientes (IdSocio, Nombre, ApellidoP, ApellidoM, FNacimiento, Domicilio, Manzana, Lote, Coto, Telefono, Celular, Membresia, TipoMembresia, Sangre, FAlta, Afiliacion) 
	VALUES ('$idsocio', '$nombre', '$apellidop', '$apellidom', '$fnacimiento', '$domicilio', '$manzana', '$lote', '$coto', '$telefono', '$celular', '$membresia', '$tipomembresia', '$sangre', '$falta', '$afiliacion')");
	$id= mysql_insert_id();
	mkdir ("parientes/".$id);
	$rutaServidor = "parientes/".$id;
	$rutaTemporal = $_FILES["Foto"]["tmp_name"];
	$nombreImagen = $_FILES["Foto"]["name"];
	$foto = $rutaServidor.'/'.$nombreImagen;
	move_uploaded_file($rutaTemporal, $foto);
	mysql_query("UPDATE parientes SET Foto='$foto' WHERE IdPariente='$id'");
	echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
?>
</html>