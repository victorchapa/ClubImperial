<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $id = $_GET["id"];
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
  $balance = consultar("SELECT * FROM balance WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  echo json_encode($balance);
?>