<?php 
  include("../consultas.php");
  $id = $_GET["id"];
  $socioRecurrentes = consultar("SELECT * FROM cargosf WHERE IdSocio='$id'");
  echo json_encode($socioRecurrentes);
?>
