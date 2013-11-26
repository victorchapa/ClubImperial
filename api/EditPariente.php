<?php
	include ("consultas.php");
	$id = $_POST['id'];
	$nombre = $_POST['Nombre'];
	$apellidop = $_POST['ApellidoP'];
	$apellidom = $_POST['ApellidoM'];
	$filtro = $_POST['Nombre']." ".$_POST['ApellidoP']." ".$_POST['ApellidoM'];
	$parentesco = $_POST['Parentesco'];
	$fnacimiento = $_POST['FNacimiento'];
	$domicilio = $_POST['Domicilio'];
	$manzana = $_POST['Manzana'];
	$lote = $_POST['Lote'];
	$coto = $_POST['Coto'];
	$telefono = $_POST['Telefono'];
	$celular = $_POST['Celular'];
	$correo = $_POST['Correo'];
	$membresia = $_POST['Membresia'];
	$tipomembresia = $_POST['TipoMembresia'];
	$sangre = $_POST['Sangre'];
	$falta = $_POST['FAlta'];
	$afiliacion = implode(', ', $_POST['Afiliacion']);
	$add = add("UPDATE socios SET Nombre='$nombre', ApellidoP='$apellidop', ApellidoM='$apellidom', Filtro='$filtro', Parentesco='$parentesco', FNacimiento='$fnacimiento', Domicilio= '$domicilio', Manzana = '$manzana', Lote = '$lote', Coto = '$coto', Telefono = '$telefono', Celular = '$celular', Correo = '$correo', Membresia= '$membresia', TipoMembresia= '$tipomembresia', Sangre ='$sangre', FAlta = '$falta', Afiliacion = '$afiliacion' WHERE IdSocio = '$id'");
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
		$add = add("UPDATE socios SET Foto='$foto' WHERE IdSocio='$id'");
	}
	echo "<script type=text/javascript>window.location.href=\"../index.php#allsocios\";</script>";
?>