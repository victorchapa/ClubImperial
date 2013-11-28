<?php
	include("consultas.php");
	$ids = $_POST["ids"];
	$idf = $_POST["idf"];
	$abono= $_POST["abono"];
	$cargos = consultar("SELECT * FROM cargos WHERE IdCargo= '$idf'");
    $mes = $cargos[0]["Mes"];
    $year = $cargos[0]["Year"];
    $tabono = $cargos[0]["Abono"] + $abono;
    $saldo = $cargos[0]["Saldo"] - $abono;
	$balance = consultar("SELECT Cargo FROM balance WHERE IdSocio= '$ids' AND Mes='$mes' AND Year='$year'");
	$abonototal = $balance[0]["Cargo"] + $abono;
    $add = add("UPDATE cargos SET Saldo = '$saldo', Abono = '$tabono' WHERE IdCargo = '$idf'");
    $add = add("UPDATE balance SET Abono = '$abonototal' WHERE IdSocio = '$ids' AND Mes='$mes' AND Year='$year'");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas/factura?id=$ids\";</script>";
?>