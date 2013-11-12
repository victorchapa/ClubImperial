<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/jQueryAutocomplete.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/jQueryAutocomplete.js"></script>
</head>
<form method="post" action="api/cpago.php" enctype="multipart/form-data">
  <h1>Generar cobro:</h1>
  <p>Nombre del cliente: <input type="text" name="Nombre"></p>
  <p>Servicio: <select name="Servicio"> 
                  <option value="Mensualidad">Mensualidad</option>
                  <option value="Carro Bar">Carro Bar</option>
                  <option value="Green Fee">Green Fee</option>
                  <option value="Velaria">Velaria</option>
                  <option value="Invitados">Invitados</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                  <option value="Carros">Carros</option>
                  <option value="Canastas">Canastas</option>
                  <option value="1H Plataforma">1H Plataforma</option>
                  <option value="Hoyo 6">Hoyo 6</option>
                  <option value="Futbol">Futbol</option>
                  <option value="Eventos">Eventos</option>
                  <option value="Clases de Golf">Clases de Golf</option>
                  <option value="Pelotas de Golf">Pelotas de Golf</option>
                  <option value="Renta de Equipos">Renta de Equipos</option>
                  <option value="Torneo">Torneo</option>
                  <option value="Varios">Varios</option>
                </select>
  </p>
  <p>Abono: <input type="text" name="Abono"></p>
  <p>Total: <input type="text" name="Total"></p>
  <input type="submit" name="Cobrar">
</form>