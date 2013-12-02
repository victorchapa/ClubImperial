<?php
	include("consultas.php");
	$id = $_GET["id"];
$m = ucfirst($_GET["m"]);
$y = $_GET["y"];
$recibo = consultar("SELECT * FROM Cargos WHERE IdSocio='$id' AND Mes='$m' AND Year='$y'");
$balance = consultar("SELECT * FROM Balance WHERE IdSocio='$id' AND Mes='$m' AND Year='$y'");
$tcargo = 0;
$tabono = 0;
$tsaldo= 0;

	if($recibo){
	$hora = $recibo[0]["Hora"];
	$d = $recibo[0]["Dia"];
	$m = $recibo[0]["Mes"];
	$y = $recibo[0]["Year"];
	$name = $d."/".$m."/".$y." ".$hora;
	header("Content-type: application/vnd.ms-excel;charset=latin");
	header("Content-Disposition: attachment; filename=recibo ".$name.".xls");
	header("Pragma: no-cache");
	header("Expires: 0");
	echo "<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='es' lang='es'>";
	echo "<meta http-equiv='Content-Type' content='text/html'/>";
	echo "<meta charset='utf-8'>";
	echo "<table cellspacing='0' cellpadding='1' border='1'>";
	echo "<tr><td><b>Servicio</b></td>";
	echo "<td><b>Fecha/hora</b></td>";
	echo "<td><b>Cargo</b></td>";
	echo "<td><b>Abono</b></td>";
	echo "<td><b>Saldo</b></td></tr>";
	foreach($recibo as $r){
		echo "<tr><td>".$r["Servicio"]."</td>";
		echo "<td>".$r["Dia"]."/".$r["Mes"]."/".$r["Year"]." ".$r["Hora"]."</td>";
		echo "<td>$".$r["Cargo"]."</td>";
		$tcargo += $r["Cargo"];
		echo "<td>$".$r["Abono"]."</td>";
		$tabono += $r["Abono"];
		echo "<td>$".$r["Saldo"]."</td></tr>";
		$tsaldo += $r["Saldo"];
	}
		echo "<tr><td>Cargo Total</td>";
        echo "<td> </td>";
        echo "<td>$".$tcargo."</td>";
        echo "<td>$".$tabono."</td>";
        echo "<td>$".$tsaldo."</td></tr>";
		echo "</table></html>";
}
 ?>