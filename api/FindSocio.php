<?php
  include("consultas.php");
  $id= $_GET["id"];
  $socio = consultar("SELECT * FROM socios WHERE IdSocio='$id'");

  if($socio){
    $idsocio = $socio["0"]["IdSocio"];
    $acceso = consultar("SELECT * FROM historial WHERE IdSocio = '$idsocio' ORDER BY IdHistorial DESC");

    $data = array();
    $data["socio"] = $socio;
    $data["acceso"] = $acceso;
    echo json_encode($data);
  }
?>
