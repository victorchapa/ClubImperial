<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $balance = consultar("SELECT * FROM balance WHERE Mes='$mes' AND Year='$año'");
  echo json_encode($balance);
?>