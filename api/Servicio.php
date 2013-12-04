<?php
	include("consultas.php");
	$idsocio = $_POST['idsocio'];
	$frecuencia = $_POST['frecuencia'];
	$servicio = $_POST['servicio'];
	$consultaservicio = consultar("SELECT * FROM recurrentes WHERE IdServicio = '$servicio'");
	$ser = $consultaservicio[0]["Servicio"];
	$cargo = $consultaservicio[0]["Cargo"];
	$add = add("INSERT INTO cargosf (IdSocio, Frecuencia, Servicio, Cargo)	VALUES ('$idsocio', '$frecuencia', '$ser', '$cargo')");
	echo "<script type=text/javascript>window.location.href=\"../index.php#allsocios\";</script>";
?>
