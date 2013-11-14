<?php
  include("../consultas.php");
  $filters = consultar("SELECT IdSocio, Filtro FROM socios");
  echo json_encode($filters);
?>