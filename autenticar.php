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
  <div class="Login">
    <div class="LoginDiv">
      <h2>Entrar al sistema</h2>
      <form method="POST" action="api/login.php">
        <input class="span3" placeholder="Usuario" type="text" name="usuario">
        <input class="span3" placeholder="Contraseña" type="password" name="clave">
        <input type="submit" class="btn-success btn btn-Login" value="Entrar">
      </form>
    </div>
  </div>
  </body>
<html>