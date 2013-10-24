<?php
	require("dbConfig.php");
	include ("consultas.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$id = $_POST['id'];
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
	mysql_query("UPDATE socios SET Nombre='$nombre', ApellidoP='$apellidop', ApellidoM='$apellidom', FNacimiento='$fnacimiento', Domicilio= '$domicilio', Manzana = '$manzana', Lote = '$lote', Coto = '$coto', Telefono = '$telefono', Celular = '$celular', Membresia= '$membresia', TipoMembresia= '$tipomembresia', Sangre ='$sangre', FAlta = '$falta', Afiliacion = '$afiliacion' WHERE IdSocio = '$id'");
	
	$oldfoto=consultar("SELECT Foto FROM socios WHERE IdSocio='$id'");
	$oldfoto=$oldfoto[0]["Foto"];
	if ($_FILES["Foto"]["name"] != ""){
		if(isset($oldfoto)){
			unlink($oldfoto);
		}

		$rutaServidor = "socios/".$id;
		$rutaTemporal = $_FILES["Foto"]["tmp_name"];
		$nombreImagen = $_FILES["Foto"]["name"];
		$foto = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto);
		$conexion =  mysql_connect($serverAddress, $user, $passwd);
    	mysql_select_db($dbName);
		mysql_query("UPDATE socios SET Foto='$foto' WHERE IdSocio='$id'");
	}

	echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
?>
</html>