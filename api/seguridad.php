<?php
@session_start();
if($_SESSION["club"] != "SI"){
echo "<script type=text/javascript>window.location.href=\"autenticar.php\";</script>";
exit();
} else {
    $fechaGuardada = $_SESSION["ultimoAcceso"]; 
    $ahora = date("Y-n-j H:i:s"); 
    $tiempo_transcurrido = (strtotime($ahora)-strtotime($fechaGuardada)); 
    if($tiempo_transcurrido >= 300) {
    	session_destroy();
		echo "<script type=text/javascript>window.location.href=\"index.php\";</script>";
    } else {
    	$_SESSION["ultimoAcceso"] = $ahora;
   	}
}
?>