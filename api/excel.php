<?php
	include("consultas.php");
	$id = $_GET["id"];
	$recibo = consultar("SELECT * FROM Cargos WHERE IdCargo='$id'");
		
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
	echo "<td><b>Cargo</b></td>";
	echo "<td><b>Deuda</b></td>";
	echo "<td><b>Fecha/hora</b></td></tr>";

	  echo "<tr><td>".$recibo[0]['Servicio']."</td>";
	  echo "<td>".$recibo[0]['Cargo']."</td>";
	  echo "<td>".$recibo[0]['Deuda']."</td>";
	  echo "<td>".$name."</td></tr>";
	echo "</table></html>";
	} else {
	echo "<script> alert(\"No hay datos\"); </script>";
	echo "<script type=text/javascript>window.location.href=\"index.php\";</script>";
	}
 ?>