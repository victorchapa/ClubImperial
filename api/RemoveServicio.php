<?php
	include("consultas.php");
	$id = $_GET['id'];
  	$add = add("DELETE FROM cargosf WHERE IdCargoF = '$id'");
?>