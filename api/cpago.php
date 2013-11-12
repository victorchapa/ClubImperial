<?php
  setlocale(LC_ALL,"spanish");
  require("dbConfig.php");
  include("consultas.php");
  $nombre = $_POST["Nombre"]." ".$_POST["ApellidoP"]." ".$_POST["ApellidoM"];
  $names = explode(" ", $nombre);
  $name = $names[0];
  $ap = $names[1];
  $am = $names[2];
  $dia = strftime("%d");
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $year = strftime("%Y");
  $hora = date("g:i a");
  $servicio = $_POST["Servicio"];
  $abono = $_POST["Abono"];
  $total = $_POST["Total"];
  $deudas = consultar("SELECT * FROM deudas WHERE Nombre = '$nombre' AND Mes = '$mes' AND Year = '$year'");
  $id = consultar("SELECT IdSocio FROM socios WHERE Nombre= '$name' AND ApellidoP = '$ap' AND ApellidoM = '$am'");
  $id = $id[0]["IdSocio"];
  if($deudas){
    $tabono = ($deudas[0]["Abono"]) + $abono;
    $ttotal = ($deudas[0]["Total"]) + $total;
    $conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
    mysql_query ("SET NAMES 'utf8'");
    mysql_query("UPDATE deudas SET Abono = '$tabono', Total = '$ttotal' WHERE Nombre= '$nombre'");
    mysql_query("INSERT INTO facturas (IdSocio, Servicio, Abono, Total, Hora, Dia, Mes, Year) 
      VALUES ('$id', '$servicio', '$abono', '$total', '$hora', '$dia', '$mes', '$year')");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas\";</script>";
  } else {
    $conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
    mysql_query ("SET NAMES 'utf8'");
    mysql_query("INSERT INTO facturas (IdSocio, Servicio, Abono, Total, Hora, Dia, Mes, Year) 
      VALUES ('$id', '$servicio', '$abono', '$total', '$hora', '$dia', '$mes', '$year')");
    mysql_query("INSERT INTO deudas (IdSocio, Nombre, Abono, Total, Mes, Year) VALUES ('$id', '$nombre', '$abono', '$total', '$mes', '$year')");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas\";</script>";
  }
?>