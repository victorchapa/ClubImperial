<?php
  require("dbConfig.php");
  include("consultas.php");
  $id= $_GET["id"];
  $socios = consultar("SELECT * FROM socios WHERE IdSocio='$id'");
  $nombre = $socios["0"]["Nombre"]." ".$socios["0"]["ApellidoP"]." ".$socios["0"]["ApellidoM"];
  $fecha = date("d/m/Y");
  $horaa = date("g:i a");
  $hora = strtotime('-5 hour', strtotime($horaa));
  $hora = date('g:i a', $hora);
  $conexion =  mysql_connect($serverAddress, $user, $passwd);
  mysql_select_db($dbName);
  mysql_query ("SET NAMES 'utf8'");
  $add = add("INSERT INTO historial (IdSocio, Nombre, FechaA, HoraA) VALUES ('$id', '$nombre', '$fecha', '$hora')");
  echo "<script type=text/javascript>window.location.href=\"../acceso.php\";</script>";
?>