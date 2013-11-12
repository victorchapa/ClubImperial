<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $deudas = consultar("SELECT * FROM deudas WHERE Mes='$mes' AND Year='$año'");
  echo json_encode($deudas);
?>