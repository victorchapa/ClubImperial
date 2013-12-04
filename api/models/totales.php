<?php 
  include("../consultas.php");
  	$año = date("Y");
	$mes = date("n");
	$meses = array("","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
	$mes = $meses[$mes];
	$cargo = 0;
	$abono = 0;
  $balances = consultar("SELECT * FROM balance WHERE Mes='$mes' AND Year = '$año'");
  foreach($balances as $balance){
  	$cargo += $balance["Cargo"];
  	$abono += $balance["Abono"];
  }
  $total[0] = $cargo;
  $total[1] = $abono;
  echo json_encode($total);
?>