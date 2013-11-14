<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/jQueryAutocomplete.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="assets/js/libs/jQueryAutocomplete.js"></script>
</head>
<body>
	<div class="ALogo">
    <img src="assets/img/logoValle.png" alt="Valle Imperial Logo.">
  </div>
  <div class="Acceso">
    <h1>Club de golf</h1>
    <h2>Control de acceso</h2>
    <div class="BuscaIdSocio">
      <form method="post" action="api/FindSocio.php">
        <input type="hidden" name="type" value="1">
        <input type="text" name="campo" placeholder="ID del socio">
        <input type="hidden" name="nombre" value="">
        <input type="hidden" name="apellidop" value="">
        <input type="hidden" name="apellidom" value="">
        <input type="submit" class="btn-success btn" value="Buscar">
      </form>
    </div>

    <div class="BuscaSocio">
      <form method="post" action="api/FindSocio.php">
        <input type="hidden" name="type" value="2">
        <input type="hidden" name="campo" value="">
        <input id="socioFinder" type="text"  name="nombre" placeholder="Nombre del Socio">
        <input type="submit" class="btn-success btn" id="buscar" value="Buscar">
      </form>
    </div>
    <div class="divVerH">
      <a href="historial.php"><input type="submit" class="btn btnNormal" value="Ver historial"/></a>
    </div>
  </div>
  <!--Scrypting-->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/routerAcceso.js"></script>
  <script src="templates/templates.js"></script>
  <!-- Templates -->
  <!-- Collections -->
  <script src="assets/js/app/collections/sociosfilters.js"></script>
  <!-- Models -->
  <!-- Views -->
  <script src="assets/js/app/views/accessControlView.js"></script>
  </body>
</html>
