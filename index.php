<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Club Valle Imperial</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/cupertino/jquery-uiCupertino.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="assets/js/libs/IEChecker.js"></script>
    <script src="assets/js/libs/jquery-uiDatePicker.js"></script>
  </head>
  <body>
    <header>
        <h1>Bienvenido</h1>
        <a href="api/salir.php">Salir</a>
    </header>
    <div id="APPContainer">
      <h3>Valle Imperial Index</h3>
      <section class="navLeft">
        <input class="altaSocioShow" type="button" value="Dar de Alta Socio">
      </section>
      <div id="mainDisplayer"></div>
    </div>
  </body>
  <!--Scrypting-->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/router.js"></script>
  <script src="templates/formSocios.js"></script>

  <!-- Models --!>
  <!-- Collections --!>
  <!-- Views --!>
  <script src="assets/js/app/views/mainView.js"></script>

</html>
