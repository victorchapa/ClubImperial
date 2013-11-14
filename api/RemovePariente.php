<?php
	include("dbConfig.php");
	$id = $_GET['id'];
  	$add = add("DELETE FROM socios WHERE IdSocio = '$id'");
	echo "<script type=text/javascript>window.location.href=\"../index.php\";</script>";
?>