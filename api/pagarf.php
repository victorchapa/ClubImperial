<?php
	include("consultas.php");
	$ids = $_POST["ids"];
	$idf = $_POST["idf"];
	$abono= $_POST["abono"];
	$cargos = consultar("SELECT * FROM cargos WHERE IdCargo= '$idf'");
    $mes = $cargos[0]["Mes"];
    $year = $cargos[0]["Year"];
    $fabono = $cargos[0]["Abono"];
    $deuda = $cargos[0]["Deuda"];
	$balance = consultar("SELECT Cargo FROM balance WHERE IdSocio= '$ids' AND Mes='$mes' AND Year='$year'");
	$cargototal = $balance[0]["Cargo"];
	$deudaactual = $deuda - $abono;
	$balancetotal = $cargototal - $abono;
    $add = add("UPDATE cargos SET Deuda = '$deudaactual' WHERE IdCargo = '$idf'");
    $add = add("UPDATE balance SET Cargo = '$balancetotal' WHERE IdSocio = '$ids' AND Mes='$mes' AND Year='$year'");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas/factura?id=$ids\";</script>";
?>