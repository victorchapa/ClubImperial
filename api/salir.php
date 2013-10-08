<?php
session_start();
session_unset();
session_destroy();
header("Location: http://localhost:8088/clubimperial/index.php");
?>