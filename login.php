<?php session_start();
require ("dbConfig.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<body>
<?php
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
	mysql_select_db("clubimperial");
	$usuario = $_POST["usuario"];   
    $clave = md5($_POST["clave"]);
    $result = mysql_query('SELECT * FROM usuarios WHERE Usuario="'.$usuario.'"');
    echo var_dump($result);
/*
	if($row = mysql_fetch_array($result)){
        if($row["Clave"] == $clave){
			$_SESSION["id_usuario"] = $row['Id_Usuario'];
            $_SESSION["usuario"] = $row['Usuario'];
			$_SESSION["permiso"] = $row['Permiso'];
			$_SESSION["ultimoAcceso"]= date("Y-n-j H:i:s");
            echo "<script type=text/javascript>window.location.href=\"localhost:8088/clubimperial/index.php\";</script>";
        }else{
            echo "<script> alert(\"La contraseña no es correcta\"); </script>";
			echo "<script type=text/javascript>window.location.href=\"localhost:8088/clubimperial/autenticar.php\";</script>";
        }
    }else{
        echo "<script> alert(\"El nombre de usuario no es correcto\"); </script>";
		echo "<script type=text/javascript>window.location.href=\"localhost:8088/clubimperial/autenticar.php\";</script>";
    }
    mysql_free_result($result);
	mysql_close();*/
?>
</body>
</html>