<?php
	include("consultas.php");
	$mes = date("n");
	$año = date("Y");
	$meses = array("","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
	$mes = $meses[$mes];
	$id = $_GET["id"];
	$cargos = consultar("SELECT * FROM cargos WHERE IdSocio = '$id' AND Mes = '$mes' AND Year = '$year'");
	foreach($cargos as $cargo){
		$idcargo = $cargo[0]["IdCargo"];
		$add = add("UPDATE cargos SET Deuda = '0'");
	}
?>