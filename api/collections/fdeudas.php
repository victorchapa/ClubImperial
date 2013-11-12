<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $id = $_GET["id"];
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $deudas = consultar("SELECT * FROM deudas WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  echo json_encode($deudas);
?>