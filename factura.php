<?php 
  setlocale(LC_ALL,"spanish");
  include("api/consultas.php");
  $id=$_GET["id"];
  $mes = strftime("%b");
  $mes= ucfirst($mes);
  $año = strftime("%Y");
  $total = 0;
  $pago = 0;
  $deuda = 0;
  $facturas = consultar("SELECT * FROM facturas WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  $deudas = consultar("SELECT * FROM deudas WHERE IdSocio = '$id' AND Mes='$mes' AND Year='$año'");
  $tdeuda = ($deudas[0]["Total"]) - ($deudas[0]["Abono"]);
  $socio = $deudas[0]["Nombre"];
  if($facturas){
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
  <h2>Deudas de <?php echo $socio; ?> </h2>
<table border="1">
  <thead>
    <th>Servicio</th>
    <th>Fecha y hora</th>
    <th>Abono</th>
    <th>Deuda</th>
    <th>Total</th>
  </thead>
  <tbody>
<?php
    foreach($facturas as $factura){
      echo "<form method= 'post' action='api/prueba.php'>";
      echo "<input type='hidden' name='ids' value='".$factura['IdSocio']."'>";
      echo "<input type='hidden' name='idf' value='".$factura['IdFactura']."'>";
      echo "<tr><td>".$factura['Servicio']."</td>";
      echo "<td>".$factura['Dia']."/".$factura['Mes']."/".$año."</br>".$factura['Hora']."</td>";
      echo "<td>$<input type='text' name='abono' onkeydown='if (event.keyCode == 13) { this.form.submit();}' value='".$factura['Abono']."'/></td>";
      $deuda = ($factura['Total']) - ($factura['Abono']);
      echo "<td>$".$deuda."</td>";
      echo "<td>$".$factura['Total']."</td></tr>";
      echo "</form>";
    }
?>
  <tr><td><b>Total: <b></td>
    <td></td>
    <td><b><?php echo "$ ".$deudas[0]["Abono"]; ?><b></td>
    <td><b><?php echo "$ ".$tdeuda; ?><b></td>
    <td><b><?php echo "$ ".$deudas[0]["Total"]; ?></b></td></tr>
  </tbody>
</table>
<?php
  } else{ 
      echo "No hay movimientos en la cuenta de ".$socio;
    }
?>
  </body>
</html>