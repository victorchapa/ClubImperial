<html>
	<body>
	</body>
<form method='post' action='api/Servicio.php'>
    <p>Socio: <input type='text' name= 'idsocio' value=''>
    <input type='hidden' name ='frecuencia' value='Mensual'>
    <p>Servicio: <select name='servicio'>
    <option value='1'>Mensualidad</option>
    </select></p>
    <p><input class='btn btnSuccess' type='submit' value='Guardar'></p>
</form>
</html>