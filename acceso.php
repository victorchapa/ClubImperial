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
      <form method="post" action="api/FindSocio.php?type=idsocio">
        <input type="text" style= "width:350px;" name="campo" placeholder="#socio">
        <input type="submit" class="btn-success btn" value="Buscar">
      </form>
    </div>
    <div class="BuscaIdPariente">
      <form method="post" action="api/FindSocio.php?type=idpariente">
        <input type="text" style= "width:350px;" name="campo" placeholder="#pariente">
        <input type="submit" class="btn-success btn" value="Buscar">
      </form>
    </div>
    <div class="BuscaSocio">
      <form method="post" action="api/FindSocio.php?type=socio">
        <input type="text" style= "width:350px;" name="campo" placeholder="Nombre socio">
        <input type="submit" class="btn-success btn" value="Buscar">
      </form>
    </div>
    <div class="BuscaPariente">
      <form method="post" action="api/FindSocio.php?type=pariente">
        <input type="text" style= "width:350px;" name="campo" placeholder="Nombre pariente">
        <input type="submit" class="btn-success btn" value="Buscar">
      </form>
    </div>
  </div>
  </body>
<html>