<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../assets/css/main.css">
</head>
<body>
<?php
  include("consultas.php");
  $type= $_POST["type"];
  $campo = $_POST["campo"];
  $nombre= $_POST["nombre"];
  $apellidop= $_POST["apellidop"];
  $apellidom= $_POST["apellidom"];
    if ($type == "1"){
        $socios = consultar("SELECT * FROM socios WHERE IdSocio='$campo'");
    } elseif ($type == "2")  {
        $socios = consultar("SELECT * FROM socios WHERE Nombre='$nombre' AND ApellidoP='$apellidop' AND ApellidoM='$apellidom'");
    }
  ?>
  <div class="findSocio">
  <?php
  if($socios){
    $idsocio = $socios["0"]["IdSocio"];
    $acceso = consultar("SELECT * FROM historial WHERE IdSocio = '$idsocio' ORDER BY IdHistorial DESC");
    echo "<img class='fotoSocio' src='".$socios["0"]["Foto"]."'>";
    echo "<div class='clear'>";
    echo "<div class='data1'>";
    echo "<p><b>Nombre: </b><label>".$socios["0"]["Nombre"]."</label></p>";
    echo "<p><b>Apellido P.: </b><label>".$socios["0"]["ApellidoP"]."</label></p>";
    echo "<p><b>Apellido M.: </b><label>".$socios["0"]["ApellidoM"]."</label></p>";
    echo "<p><b>Último acceso: </b>".$acceso["0"]["FechaA"]." a las ".$acceso["0"]["HoraA"]."</p>";
    echo "</div>";
    echo "<a href='access.php?id=".$idsocio."'><input type='button' class='btn-success btn btnAcceso' value='Acceso'></a>";
  } else {
    echo "No se encontraron coincidencias";
  }
?>
</div>
</body>
</html>