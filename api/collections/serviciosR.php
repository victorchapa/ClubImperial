<?php 
  include("../consultas.php");
  $recurrentes = consultar("SELECT * FROM recurrentes");
  echo json_encode($recurrentes);
?>
