<?php 
  setlocale(LC_ALL,"spanish");
  include("api/consultas.php");
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $deudas = consultar("SELECT * FROM deudas WHERE Mes='$mes' AND Year='$año'");
  if($deudas){
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
  <h2>Lista de pagos</h2>
<table border = "1">
  <thead>
    <th>Socios</th>
    <th>Abono</th>
    <th>Total</th>
    <th>Factura</th>
  </thead>
  <tbody>
<?php
    foreach($deudas as $deuda){
      echo "<tr><td>".$deuda['Nombre']."</td>";
      echo "<td>$".$deuda['Abono']."</td>";
      echo "<td>$".$deuda['Total']."</td>";
      echo "<td><a href='factura.php?id=".$deuda['IdSocio']."'>Ver</a></td></tr>";
    }
?>
  </tbody>
</table>
<?php
  } else{ 
      echo "No hay información";
    }
?>
  </body>
</html>