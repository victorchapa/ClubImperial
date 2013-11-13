<?php
	require("dbConfig.php");
	include("consultas.php");
	$ids = $_POST["ids"];
	$idf = $_POST["idf"];
	$abono= $_POST["abono"];
	$ffactura = consultar("SELECT * FROM facturas WHERE IdFactura= '$idf'");
    $mes = $ffactura[0]['Mes'];
    $year = $ffactura[0]['Year'];
    $fabono = $ffactura[0]["Abono"];
	$dabono = consultar("SELECT Abono FROM deudas WHERE IdSocio= '$ids' AND Mes='$mes' AND Year='$year'");
	$dabono = $dabono[0]["Abono"];
	$abonado = $abono - $fabono;
	$dabono+= $abonado;
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
    mysql_query ("SET NAMES 'utf8'");
    mysql_query("UPDATE facturas SET Abono = '$abono' WHERE IdFactura = '$idf'");
    mysql_query("UPDATE deudas SET Abono = '$dabono' WHERE IdSocio = '$ids' AND Mes='$mes' AND Year='$year'");
    echo "<script type=text/javascript>window.location.href=\"../factura.php?id=$ids\";</script>";
?>