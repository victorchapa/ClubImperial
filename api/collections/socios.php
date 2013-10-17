<?php 
  include("../consultas.php");
  $socios = consultar("SELECT * FROM socios");
  echo json_encode($socios);
?>
