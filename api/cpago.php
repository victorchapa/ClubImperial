<?php
  setlocale(LC_ALL,"spanish");
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
  $deudas = consultar("SELECT * FROM balance WHERE Nombre = '$nombre' AND Mes = '$mes' AND Year = '$year'");
  $id = consultar("SELECT IdSocio FROM socios WHERE Nombre= '$name' AND ApellidoP = '$ap' AND ApellidoM = '$am'");
  $id = $id[0]["IdSocio"];
  if($deudas){
    $tabono = ($deudas[0]["Abono"]) + $abono;
    $ttotal = ($deudas[0]["Cargo"]) + $total;
    $add = add("UPDATE balance SET Abono = '$tabono', Cargo = '$ttotal' WHERE Nombre= '$nombre'");
    $add = add("INSERT INTO cargos (IdSocio, Servicio, Abono, Cargo, Hora, Dia, Mes, Year) 
      VALUES ('$id', '$servicio', '$abono', '$total', '$hora', '$dia', '$mes', '$year')");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas\";</script>";
  } else {
    $add = add("INSERT INTO cargos (IdSocio, Servicio, Abono, Cargo, Hora, Dia, Mes, Year) 
      VALUES ('$id', '$servicio', '$abono', '$total', '$hora', '$dia', '$mes', '$year')");
    $add = add("INSERT INTO balance (IdSocio, Nombre, Abono, Cargo, Mes, Year) VALUES ('$id', '$nombre', '$abono', '$total', '$mes', '$year')");
    echo "<script type=text/javascript>window.location.href=\"../index.php#ccuotas\";</script>";
  }
?>