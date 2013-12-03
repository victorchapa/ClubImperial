<?php
	include("consultas.php");
	$tipo = $_POST['tipo'];
	$servicio = ucfirst($_POST['servicio']);
	$cargo = $_POST['cargo'];

	if($tipo == "1"){
		$add = add("INSERT INTO servicios (Servicio, Cargo)	VALUES ('$servicio', '$cargo')");
	} else {
		$add = add("INSERT INTO recurrentes (Servicio, Cargo)	VALUES ('$servicio', '$cargo')");
	}

	echo "<script type=text/javascript>window.location.href=\"../index.php\";</script>";
?>