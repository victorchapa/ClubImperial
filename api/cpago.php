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
  if ($abono == ""){
    $abono = 0;
  }
  $total = $_POST["Total"];
  $deudas = consultar("SELECT * FROM balance WHERE Nombre = '$nombre' AND Mes = '$mes' AND Year = '$year'");
  $id = consultar("SELECT IdSocio FROM socios WHERE Nombre= '$name' AND ApellidoP = '$ap' AND ApellidoM = '$am'");
  $id = $id[0]["IdSocio"];
  if($deudas){
    $diferencia = $total - $abono;
    $balance = ($deudas[0]["Cargo"]) + $total;
    $tabono = ($deudas[0]["Abono"]) + $abono;
    $add = add("UPDATE balance SET Abono = '$tabono', Cargo = '$balance' WHERE Nombre= '$nombre' AND Mes = '$mes' AND Year = '$year'");
    $conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
    mysql_query ("SET NAMES 'utf8'");
    mysql_query("INSERT INTO cargos (IdSocio, Servicio, Cargo, Abono, Saldo, Hora, Dia, Mes, Year) 
      VALUES ('$id', '$servicio', '$total', $abono, $diferencia, '$hora', '$dia', '$mes', '$year')");
    $idf= mysql_insert_id();
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas?fid=$idf\";</script>";
  } else {
    $conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
    mysql_query ("SET NAMES 'utf8'");
    mysql_query("INSERT INTO cargos (IdSocio, Servicio, Cargo, Abono, Saldo, Hora, Dia, Mes, Year) 
      VALUES ('$id', '$servicio', '$total', $abono, $diferencia, '$hora', '$dia', '$mes', '$year')");
    $idf= mysql_insert_id();
    $add = add("INSERT INTO balance (IdSocio, Nombre, Abono, Cargo, Mes, Year) VALUES ('$id', '$nombre', '$tabono', '$balance', '$mes', '$year')");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas?fid=$idf\";</script>";
  }
?>