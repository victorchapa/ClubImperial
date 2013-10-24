<?php 
  include("api/consultas.php");
  $socios = consultar("SELECT * FROM historial ORDER BY FechaA DESC, HoraA DESC");
  if($socios){
?>
<table>
  <thead>
    <th>Nombre</th>
    <th>Fecha de acceso</th>
    <th>Hora de acceso</th>
  </thead>
  <tbody>
<?php
    foreach($socios as $socio){
      echo "<tr><td>".$socio['Nombre']."</td>";
      echo "<td>".$socio['FechaA']."</td>";
      echo "<td>".$socio['HoraA']."</td></tr>";
    }
?>
  </tbody>
</table>
<?php
  } else{ 
      echo "No hay historial de acceso";
    }
?>