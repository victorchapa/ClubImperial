TEMPLATES.recurrentes = 
"<script type='text/template'>" +
    "<div class='well margin-none'>" +
        "<address class='margin-none'>" +
            "<form method='post' action='api/Servicio.php'>" +
                "<input type='hidden' name='idsocio'>" +
                "<p>Socio: <input type='text' name= 'socio'>" +
                "<input type='hidden' name ='frecuencia' value='Mensual'>" +
                "<p>Servicio: <select name='servicio'>" +
                    "<option value='1'>Mensualidad</option>" +
                "</select></p>" +
                "<p><input class='btn btnSuccess' type='submit' value='Guardar'></p>" +
            "</form>" +
        "</address>" +
    "</div>" +
"</script>";