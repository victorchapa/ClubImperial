<?php 
    session_start(); 
    require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
      <head>
        <meta charset="utf-8">
    </head>
    <body>
<?php
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
    mysql_query ("SET NAMES 'utf8'");
	$usuario = $_POST["usuario"];
    $clave = md5($_POST["clave"]);
    $result = mysql_query('SELECT * FROM usuarios WHERE Usuario="'.$usuario.'"');

	if($row = mysql_fetch_array($result)){
        if($row["Clave"] == $clave){
			$_SESSION["id_usuario"] = $row['Id_Usuario'];
            $_SESSION["usuario"] = $row['Usuario'];
			$_SESSION["permiso"] = $row['Permiso'];
			$_SESSION["club"] = "SI";
			$_SESSION["ultimoAcceso"]= date("Y-n-j H:i:s");
            echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
        }else{
            echo "<script> alert(\"La contraseña no es correcta\"); </script>";
			echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/autenticar.php\";</script>";
        }
    }else{
        echo "<script> alert(\"El nombre de usuario no es correcto\"); </script>";
		echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/autenticar.php\";</script>";
    }
?>
    </body>
</html>