TEMPLATES.formServicios =
"<script type='text/template'>" +
    "<div class='row'>" +
        "<div class='col-md-4'>" +
            "<div class='well margin-none'>" +
                "<address class='margin-none'>" +
                    "<form method='post' action='api/nuevoServicio.php'>" +
                        "<p>Tipo de servicio: <select class='input-sm form-control' name='tipo'>" +
                            "<option value='1'>Normal</option>" +
                            "<option value='2'>Recurrente</option>" +
                        "</select></p>" +
                        "<p>Servicio: <input class='input-sm form-control' type='text' name='servicio'> </p>" +
                        "<p>Cargo: <input class='input-sm form-control' type='text' name='cargo'></p>" +
                        "<p><input class='btn btn-success' type='submit' value='Guardar'></p>" +
                    "</form>" +
                "</address>" +
            "</div>" +
        "</div>" +
    "</div>" +
"</script>";
