<?php 
  include("../consultas.php");
  $socios = consultar("SELECT * FROM socios WHERE IdPariente = '0'");
  echo json_encode($socios);
?>
