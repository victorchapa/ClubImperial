TEMPLATES.formServicios =
"<div class='well margin-none'>" +
    "<address class='margin-none'>" +
        "<form method='post' action='api/nuevoServicio.php'>" +
        "<select name='tipo'>" +
            "<option value='1'>Normal</option>" +
            "<option value='2'>Recurrente</option>" +
        "<p>Servicio: <input type='text' name='servicio'> </p>" +
        "<p>Cargo: <input type='text' name='cargo'></p>" +
        "<p><input class='btn btnSuccess' type='submit' value='Guardar'></p>" +
        "</form>"
    "</address>" +
"</div>";