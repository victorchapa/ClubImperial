<?php 
  include("consultas.php");
  $id = $_GET["id"];
  $socios = consultar("SELECT * FROM socios WHERE IdSocio='$id'");
  $servicios = consultar("SELECT * FROM cargosf WHERE IdSocio='$id'");
  $parientes = consultar("SELECT * FROM socios WHERE IdPariente='$id'");
  if($socios){
    echo "<div class='row'>";
            echo "<div class='col-md-4'>";
                echo "<img class='fotoSocio' src='api/".$socios["0"]["Foto"]."'>";
            echo "</div>";
            echo "<div class='col-md-4'>";
                echo "<p>Nombre: <label>".$socios["0"]["Nombre"]."</label></p>";
                echo "<p>Apellido P.: <label>".$socios["0"]["ApellidoP"]."</label></p>";
                echo "<p>Apellido M.: <label>".$socios["0"]["ApellidoM"]."</label></p>";
                echo "<p>Fecha de nacimiento: <label>".$socios["0"]["FNacimiento"]."</label></p>";
                echo "<p>Domicilio: <label>".$socios["0"]["Domicilio"]."</label></p>";
                echo "<p>Manzana: <label>".$socios["0"]["Manzana"]."</label></p>";
                echo "<p>Lote: <label>".$socios["0"]["Lote"]."</label></p>";
                echo "<p>Coto: <label>".$socios["0"]["Coto"]."</label></p>";
            echo "</div>";
            echo "<div class='col-md-4'>";
                echo "<p>Teléfono: <label>".$socios["0"]["Telefono"]."</label></p>";
                echo "<p>Célular: <label>".$socios["0"]["Celular"]."</label></p>";
                echo "<p>Email: <label>".$socios["0"]["Correo"]."</label></p>";
                echo "<p>Membresia: <label>".$socios["0"]["Membresia"]."</label></p>";
                echo "<p>Tipo de membresia: <label>".$socios["0"]["TipoMembresia"]."</label></p>";
                echo "<p>Sangre: <label>".$socios["0"]["Sangre"]."</label></p>";
                echo "<p>Fecha de alta: <label>".$socios["0"]["FAlta"]."</label></p>";
                echo "<p>Afiliación: <label>".$socios["0"]["Afiliacion"]."</label></p>";
            echo "</div>";
            echo "<div class='col-md-12'>";
            echo "<p>Parientes:</p>";
            echo "<div class='tableKin'>";
            if($parientes){
            echo "<table class='blue-table table table-primary table-bordered'>";
            echo "<thead>";
            echo "<th>Nombre</th>";
            echo "<th>Apellido P.</th>";
            echo "<th>Apellido M.</th>";
            echo "<th>Parentesco</th>";
            echo "<th>F. Nacimiento</th>";
            echo "<th>Teléfono</th>";
            echo "<th>Célular</th>";
            echo "<th>Email</th>";
            echo "<th>Membresia</th>";
            echo "<th>Tipo de membresia</th>";
            echo "<th>Sangre</th>";
            echo "<th>Fecha de alta</th>";
            echo "<th>Afiliación</th>";
            echo "</thead>";
            echo "<tbody>";
              foreach($parientes as $pariente){
                echo "<tr><td>".$pariente["Nombre"]."</td>";
                echo "<td>".$pariente["ApellidoP"]."</td>";
                echo "<td>".$pariente["ApellidoM"]."</td>";
                echo "<td>".$pariente["Parentesco"]."</td>";
                echo "<td>".$pariente["FNacimiento"]."</td>";
                echo "<td>".$pariente["Telefono"]."</td>";
                echo "<td>".$pariente["Celular"]."</td>";
                echo "<td>".$pariente["Correo"]."</td>";
                echo "<td>".$pariente["Membresia"]."</td>";
                echo "<td>".$pariente["TipoMembresia"]."</td>";
                echo "<td>".$pariente["Sangre"]."</td>";
                echo "<td>".$pariente["FAlta"]."</td>";
                echo "<td>".$pariente["Afiliacion"]."</td>";
              }
            echo "</tbody>";
            echo "</table>";
            }else{
              echo "<p>No tiene parientes registrados.</p>";
            }
            echo "</div>";
          }
          echo "<div>";
          echo "<p>Servicios recurrentes: </p>";
          if($servicios){
                echo "<table class='blue-table table-factura table table-primary table-bordered'>";
                echo "<thead>";
                echo "<tr>";
                echo "<th>Servicio</th>";
                echo "<th>Frecuencia</th>";
                echo "<th>Cargo</th>";
                echo "</tr>";
                echo "</thead>";
                echo "<tbody>";
            foreach($servicios as $servicio){
                echo "<tr><td>".$servicio["Servicio"]."</td>";
                echo "<td>".$servicio["Frecuencia"]."</td>";
                echo "<td>".$servicio["Cargo"]."</td></tr>";
            }
            echo "</tbody>";
            echo "</table>";
          } else {
            echo "No tiene servicios recurrentes";
          }
          echo "</div>";
          echo "</div>";
  echo "</div>"
?>
