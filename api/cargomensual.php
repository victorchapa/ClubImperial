<?php
	include("consultas.php");
	$mes = date("n");
	$estedia = date("d");
	$estemes = date("n");
	$esteaño = date("Y");
	$año = date("Y");
	if ($mes == 1){
		$mes = 12;
		$año -= 1;
	} else {
		$mes -= 1;
	}
	$meses = array("","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
	$mes = $meses[$mes];
	$estemes = $meses[$estemes];
	$servicio = "Saldo anterior";
	$socios = consultar("SELECT * FROM socios");
	foreach($socios as $socio){
		$id = $socio["IdSocio"];
		$nombre = $socio["Nombre"]." ".$socio["ApellidoP"]." ".$socio["ApellidoM"];
		$balance = consultar("SELECT * FROM balance WHERE IdSocio = '$id' AND Mes = '$mes' AND Year = '$año'");
		if ($balance[0]["Abono"] < $balance[0]["Cargo"]){
			$cargo = $balance[0]["Cargo"] - $balance[0]["Abono"];
			$abono = 0;
			$cargomespasado = add("INSERT INTO cargos (IdSocio, Nombre, Servicio, Deuda, Cargo, Mes, Year) VALUES ('$id', '$nombre', '$servicio', '$cargo', '$cargo', '$estemes', '$esteaño')");
		} else {
			if ($balance[0]["Abono"] > $balance[0]["Cargo"]){
			$abono = $balance[0]["Abono"] - $balance[0]["Cargo"];
			$cargo = 0;
			} else {
				$abono = 0;
				$cargo = 0;
			}
		}
		$newbalance = add("INSERT INTO balance (IdSocio, Nombre, Abono, Cargo, Mes, Year) VALUES ('$id', '$nombre', '$abono', '$cargo', '$estemes', '$esteaño')");
	}

	foreach($socios as $socio){
		$id = $socio["IdSocio"];
		$servicios = consultar("SELECT * FROM cargosf WHERE IdSocio = '$id' AND Frecuencia = 'Mensual'");
		if($servicios){
			foreach($servicios as $servicio){
				$balance = consultar("SELECT * FROM balance WHERE IdSocio = '$id' AND Mes = '$estemes' AND Year = '$esteaño'");
				$serv = $servicio["Servicio"];
				$cargo = $servicio["Cargo"];
				$balance = $balance[0]["Cargo"] + $cargo;
				$newcargo = add("INSERT INTO cargos (IdSocio, Servicio, Cargo, Saldo, Dia, Mes, Year) VALUES ('$id', '$serv', '$cargo', '$cargo', '$estedia', '$estemes', '$esteaño')");
				$newbalance = add("UPDATE balance SET Cargo = '$balance' WHERE IdSocio = '$id' AND Mes = '$estemes' AND Year = '$esteaño'");
			}
		}
	}
?>