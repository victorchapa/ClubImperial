<?php
$ticket = $_REQUEST['ticket'];
shell_exec("echo $ticket > /dev/usb");
?>