<?php 
  include("../consultas.php");
  $id = $_GET["id"];
  $resumen = consultar("SELECT * FROM saldos WHERE IdSocio = '$id'");
  echo json_encode($resumen);
?>