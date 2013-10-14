<?php 
  include("api/consultas.php");
  $socios = consultar("SELECT * FROM socios");
  if($socios){
?>
<table>
  <thead>
    <th>Nombre</th>
    <th>Fecha de Nacimiento</th>
    <th>Parentesco</th>
    <th>Domicilio</th>
    <th>Manzana</th>
    <th>Lote</th>
    <th>Coto</th>
    <th>Télefono</th>
    <th>Célular</th>
    <th>Membresia</th>
    <th>Sangre</th>
    <th>Fecha de alta</th>
    <th>Afiliación</th>
    <th>Acciones</th>
  </thead>
  <tbody>
<?php
    foreach($socios as $socio){
      echo "<tr><td>".$socio['Nombre']."</td>";
      echo "<td>".$socio['FNacimiento']."</td>";
      echo "<td>".$socio['Parentesco']."</td>";
      echo "<td>".$socio['Domicilio']."</td>";
      echo "<td>".$socio['Manzana']."</td>";
      echo "<td>".$socio['Lote']."</td>";
      echo "<td>".$socio['Coto']."</td>";
      echo "<td>".$socio['Telefono']."</td>";
      echo "<td>".$socio['Celular']."</td>";
      echo "<td>".$socio['Membresia']."</td>";
      echo "<td>".$socio['Sangre']."</td>";
      echo "<td>".$socio['FAlta']."</td>";
      echo "<td>".$socio['Afiliacion']."</td>";
      echo "<td><a href=". ("verSocio.php?id=".$socio["IdSocio"]).">Ver perfíl</a></td></tr>";
    }
?>
  </tbody>
</table>
<?php
  } else{ 
      echo "No hay socios agregados";
    }
?>