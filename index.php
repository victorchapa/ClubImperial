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
        <div class="loginAs">
          <p>Loggeado cómo: (<a href="api/salir.php">Salir</a>)</p>
        </div>
        <div class="logoContainer">
          <div class="VLogo">
            <img src="assets/img/logoValle.png" alt="Valle Imperial Logo.">
          </div>
          <div class="triangule"></div>
        </div>
        <nav class="mainNav">
          <ul>
            <li class="active"><a href="#">Inicio</a></li>
            <li><a href="#">Socios</a></li>
            <li><a href="#">Bienvenido</a></li>
            <li><a href="#">Bienvenido</a></li>
            <li><a href="#">Bienvenido</a></li>
          </ul>
        </nav>
    </header>
    <div id="APPContainer">
      <section class="leftPanel">
        <div class="navLeft">
          <input class="btn btnNormal altaSocioShow" type="button" value="Dar de Alta Socio">
        </div>
        <div class="lotLeafs">
          <img src="assets/img/lotLeafs.gif">
        </div>
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
  <script src="assets/js/app/views/navMainView.js"></script>

</html>
