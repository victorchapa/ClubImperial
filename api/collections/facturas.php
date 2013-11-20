<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $id = $_GET["id"];
  if (isset($_GET["mes"])){
  	$mes = $_GET["mes"];
  } else {
  	$mes = strftime("%b");
  }
  $mes= ucfirst($mes);
  if(isset($_GET["year"])){
  	$año = $_GET["year"];
  } else {
  	$año = strftime("%Y");
  }
  $cargos = consultar("SELECT * FROM cargos WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  echo json_encode($cargos);
?>