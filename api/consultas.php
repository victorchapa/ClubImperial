<?php
	function consultar($query){
		require('dbConfig.php');
		$conexion =  mysql_connect($serverAddress, $user, $passwd);
		mysql_select_db($dbName);
		mysql_query ("SET NAMES 'utf8'");
		$resultado= mysql_query($query, $conexion);
		$i=0;
		while ($reg2=mysql_fetch_array($resultado)){
			$arreglo[$i]=$reg2;
			$i++;
		}
		mysql_close($conexion);
		if($i==0){
			return $reg2;
		}
		else{
			return $arreglo;
		}
	}

?>
