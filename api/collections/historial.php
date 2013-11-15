<?php 
  include("../consultas.php");
  $historial = consultar("SELECT * FROM historial ORDER BY FechaA DESC, HoraA DESC");
  echo json_encode($historial);
?>
