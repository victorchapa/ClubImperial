<?php
  include("../consultas.php");
  $id = $_GET["id"];
  $parientes = consultar("SELECT * FROM socios WHERE IdPariente = '$id'");
  echo json_encode($parientes);
?>
