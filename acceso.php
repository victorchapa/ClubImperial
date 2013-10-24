<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="assets/css/main.css">
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
        <input type="text" style= "width:350px;" name="campo" placeholder="#socio">
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
        <input type="text" style= "width:350px;" name="nombre" placeholder="Nombre">
        <input type="text" style= "width:350px;" name="apellidop" placeholder="Apellido Paterno">
        <input type="text" style= "width:350px;" name="apellidom" placeholder="Apellido Materno">
        <p><input type="submit" class="btn-success btn" value="Buscar"></p>
      </form>
    </div>

    <div class="divVerH">
      <a href="historial.php">Ver historial</a>
    </div>
  </div>
  </body>
<html>