<?php
  include ("api/seguridad.php");
  @session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Club Valle Imperial</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/bootstrapModal.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/cupertino/jquery-uiCupertino.css">
    <link rel="stylesheet" href="assets/css/jQueryAlerts.css">
    <link rel="stylesheet" href="assets/css/jQueryAutocomplete.css">
    <!-- <link rel="stylesheet" href="assets/css/themeFixedHeaderTable.css"> -->
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="assets/js/libs/IEChecker.js"></script>
    <script src="assets/js/libs/jquery-uiDatePicker.js"></script>
    <script src="assets/js/libs/jQueryDataPickerEs.js"></script>
    <script src="assets/js/libs/bootstrapModal.js"></script>
    <script src="assets/js/libs/jQueryDnDAlerts.js"></script>
    <script src="assets/js/libs/jQueryAlerts.js"></script>
    <script src="assets/js/libs/jQueryAutocomplete.js"></script>
    <!-- <script src="assets/js/libs/jqueryFixedHeaderTable.js"></script> -->
  </head>
  <body>
    <header>
        <div class="loginAs">
          <p>Loggeado cómo: <?php echo $_SESSION["usuario"];?> (<a href="api/salir.php">Salir</a>)</p>
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
            <li><a href="#allsocios">Socios</a></li>
            <li><a href="#ccuotas">Cuotas</a></li>
            <li><a href="#">Bienvenido</a></li>
            <li><a href="#">Bienvenido</a></li>
          </ul>
        </nav>
    </header>
    <div id="APPContainer">
      <section class="leftPanel">
        <div class="navLeft">
          <input class="btn btnNormal addSocios" type="button" value="Agregar socios">
        </div>
        <div class="lotLeafs">
          <img src="assets/img/lotLeafs.gif">
        </div>
      </section>
      <div id="mainDisplayer">
      </div>
    </div>
    <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Ficha del Socio</h4>
          </div>
          <div id="modalDisplayer" class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal" id="modalParientes" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title"></h4>
          </div>
          <div id="modalDisplayerParientes" class="modal-body">
            ...
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


  <!--Scrypting-->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/router.js"></script>
  <script src="templates/templates.js"></script>

  <!-- Templates -->
  <script src="templates/index.js"></script>
  <script src="templates/formSocios.js"></script>
  <script src="templates/formParientes.js"></script>
  <script src="templates/editSocio.js"></script>
  <script src="templates/editPariente.js"></script>
  <script src="templates/socioNav.js"></script>
  <script src="templates/cuotasForm.js"></script>
  <script src="templates/allSocios.js"></script>

  <!-- Collections -->
  <script src="assets/js/app/collections/socios.js"></script>
  <script src="assets/js/app/collections/parientes.js"></script>
  <script src="assets/js/app/collections/sociosfilters.js"></script>
  <!-- Models -->
  <script src="assets/js/app/models/socio.js"></script>
  <!-- Views -->
  <script src="assets/js/app/views/mainView.js"></script>
  <script src="assets/js/app/views/navMainView.js"></script>
  <script src="assets/js/app/views/socioView.js"></script>
  <script src="assets/js/app/views/memoParientesView.js"></script>
  <script src="assets/js/app/views/cuotasView.js"></script>
  </body>
</html>
