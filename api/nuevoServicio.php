<?php
	include("consultas.php");
	$servicio = ucfirst($_POST['servicio']);
	$cargo = $_POST['cargo'];
	$consultaservicio = consultar("SELECT * FROM servicios WHERE Servicio = '$servicio'");
	if($consultaservicio){
		echo "<script> alert(\"El servicio ya existe\"); </script>";
	} else{
		$add = add("INSERT INTO servicios (Servicio, Cargo)	VALUES ('$servicio', '$cargo')");
	}
	echo "<script type=text/javascript>window.location.href=\"../index.php\";</script>";
?>