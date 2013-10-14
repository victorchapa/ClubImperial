<?php 
  include("api/consultas.php");
  $id = $_GET["id"];
  $socios = consultar("SELECT * FROM socios WHERE IdSocio='$id'");
  if($socios){
    echo "<img src='api/".$socios["0"]["Foto"]."'>";
    echo "<p>Nombre: <label>".$socios["0"]["Nombre"]."</label></p>";
    echo "<p>Fecha de nacimiento: <label>".$socios["0"]["FNacimiento"]."</label></p>";
    echo "<p>Parentesco: <label>".$socios["0"]["Parentesco"]."</label></p>";
    echo "<p>Domicilio: <label>".$socios["0"]["Domicilio"]."</label></p>";
    echo "<p>Manzana: <label>".$socios["0"]["Manzana"]."</label></p>";
    echo "<p>Lote: <label>".$socios["0"]["Lote"]."</label></p>";
    echo "<p>Coto: <label>".$socios["0"]["Coto"]."</label></p>";
    echo "<p>Teléfono: <label>".$socios["0"]["Telefono"]."</label></p>";
    echo "<p>Célular: <label>".$socios["0"]["Celular"]."</label></p>";
    echo "<p>Membresia: <label>".$socios["0"]["Membresia"]."</label></p>";
    echo "<p>Sangre: <label>".$socios["0"]["Sangre"]."</label></p>";
    echo "<p>Fecha de alta: <label>".$socios["0"]["FAlta"]."</label></p>";
    echo "<p>Afiliación: <label>".$socios["0"]["Afiliacion"]."</label></p>";
  } else{
      echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
    }