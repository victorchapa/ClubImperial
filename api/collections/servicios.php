<?php 
  include("../consultas.php");
  $cargosf = consultar("SELECT * FROM servicios");
  echo json_encode($cargosf);
?>
