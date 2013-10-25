<?php
	require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$id = $_GET['id'];
  	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
	mysql_query ("SET NAMES 'utf8'");
	mysql_query("DELETE FROM socios WHERE IdSocio = '$id'");
	echo "<script type=text/javascript>window.location.href=\"../index.php\";</script>";
?>
</html>
