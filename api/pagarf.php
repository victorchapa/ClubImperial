<?php
	include("consultas.php");
	$ids = $_POST["ids"];
	$idf = $_POST["idf"];
	$abono= $_POST["abono"];
	$ffactura = consultar("SELECT * FROM cargos WHERE IdCargo= '$idf'");
    $mes = $ffactura[0]['Mes'];
    $year = $ffactura[0]['Year'];
    $fabono = $ffactura[0]["Abono"];
	$dabono = consultar("SELECT Abono FROM balance WHERE IdSocio= '$ids' AND Mes='$mes' AND Year='$year'");
	$dabono = $dabono[0]["Abono"];
	$abonado = $abono - $fabono;
	$dabono+= $abonado;
    $add = add("UPDATE cargos SET Abono = '$abono' WHERE IdCargo = '$idf'");
    $add = add("UPDATE balance SET Abono = '$dabono' WHERE IdSocio = '$ids' AND Mes='$mes' AND Year='$year'");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas/factura?id=$ids\";</script>";
?>