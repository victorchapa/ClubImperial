<?php
  include("../consultas.php");
  setlocale(LC_ALL,"spanish");
  $id = $_GET["id"];
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $cargos = consultar("SELECT * FROM cargos WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  echo json_encode($cargos);
?>