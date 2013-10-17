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
          <input class="btn btnNormal addSocios" type="button" value="Agregar socios">
        </div>
        <div class="lotLeafs">
          <img src="assets/img/lotLeafs.gif">
        </div>
      </section>
      <div id="mainDisplayer"></div>
    </div>
  <!--Template-->
        <script type='text/template' id='thisTemplate'> 
          <table border='1'>
              <tr>
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
                <th>Tipo de sangre</th>
                <th>Fecha de alta</th>
                <th>Afiliación</th>
                <th>Acciones</th>
            </tr>
                <% _.each(socios[0], function(socio) { %>
                <tr>
                    <td><% print(socio.Nombre); %></td>
                    <td><% print(socio.FNacimiento); %></td>
                    <td><% print(socio.Parentesco); %></td>
                    <td><% print(socio.Domicilio); %></td>
                    <td><% print(socio.Manzana); %></td>
                    <td><% print(socio.Lote); %></td>
                    <td><% print(socio.Coto); %></td>
                    <td><% print(socio.Telefono); %></td>
                    <td><% print(socio.Celular); %></td>
                    <td><% print(socio.Membresia); %></td>
                    <td><% print(socio.Sangre); %></td>
                    <td><% print(socio.FAlta); %></td>
                    <td><% print(socio.Afiliacion); %></td>
                    <td><a href="verSocio.php?id=<% print(socio.IdSocio); %>">Ver perfil</a></td>
                </tr>
                <% }); %>
            </table>
            </script>
  <!--Scrypting-->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/router.js"></script>
  <script src="templates/formSocios.js"></script>

  <!-- Collections --!>
  <script src="assets/js/app/collections/socios.js"></script>
  <!-- Models --!>
  <script src="assets/js/app/models/socio.js"></script>
  <!-- Views --!>
  <script src="assets/js/app/views/mainView.js"></script>
  <script src="assets/js/app/views/navMainView.js"></script>
  </body>
</html>
