<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $id = $_GET["id"];
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $balance = consultar("SELECT * FROM balance WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  echo json_encode($balance);
?>