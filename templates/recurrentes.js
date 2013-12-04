TEMPLATES.recurrentes = 
"<script type='text/template'>" +
    "<div class='well margin-none'>" +
        "<address class='margin-none'>" +
            "<form method='post' action='api/Servicio.php'>" +
                "<input type='hidden' name='idsocio' value='<% print(idSocio); %>'>" +
                "<input type='hidden' name ='frecuencia' value='Mensual'>" +
                "<p>Servicio: <select name='servicio'>" +
                    "<option value='0'>Seleccione un Servicio</option>" +
                    "<% _.each(recurrentes, function(recurrente) { %>" +
                        "<option value='<% print(recurrente.Servicio); %>' cargo='<% print(recurrente.Cargo); %>'><% print(recurrente.Servicio); %></option>" +
                    "<% }); %>" +
                "</select></p>" +
                "<p><input class='btn btn-success' type='submit' value='Guardar'></p>" +
            "</form>" +
        "</address>" +
    "</div>" +
"</script>";
