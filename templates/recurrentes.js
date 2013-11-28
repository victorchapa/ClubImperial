TEMPLATES.recurrentes = 
        "<script type='text/template'>" +
          "<h2>Agregar cargo recurrente</h2>" +
        "<div class=''>" +
          "<form method='post' action='api/Servicio.php'>" +
            "<p>Socio: <input type='text' value='idsocio'>" +
            "<p>Frecuencia: <select name ='frecuencia'>" +
            "<option value='mensual'>Mensual</option>" +
            "<option value='semanal'>Semanal</option>" +
            "</select></p>"+
            "<p>Servicio: <select name='servicio'>" +
            "</select></p>" +
            "<input class='btn btnSuccess' type='submit' value='Agregar Servicio'></p>" +
            "</form>" +
          "</div>" +
            "</script>";