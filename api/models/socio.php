<?php 
  include("../consultas.php");
  $id = $_GET["id"];
  $socios = consultar("SELECT * FROM socios WHERE IdSocio='$id'");
  echo json_encode($socios);
?>
