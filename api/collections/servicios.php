<?php 
  include("../consultas.php");
  $id = $_GET["id"];
  $cargosf = consultar("SELECT * FROM cargosf WHERE IdSocio = '$id'");
  echo json_encode($cargosf);
?>