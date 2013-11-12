TEMPLATES.cuotasForm = 
        "<script type='text/template'>" +
            "<form method='post' action='api/cpago.php' enctype='multipart/form-data'>" +
                "<h1>Generar Cobro:</h1>" + 
                "<p>Nombre de Cliente: <input type='text' name='Nombre'></p>" +
                "<p>Servicio: <select name='Servicio'>" +
                    "<option value='Mensualidad'>Mensualidad</option>" +
                    "<option value='Carro Bar'>Carro Bar</option>" +
                    "<option value='Green Fee'>Green Fee</option>" +
                    "<option value='Velaria'>Velaria</option>" +
                    "<option value='Invitados'>Invitados</option>" +
                    "<option value='Mantenimiento'>Mantenimiento</option>" +
                    "<option value='Caros'>Carros</option>" +
                    "<option value='Canastas'>Canastas</option>" +
                    "<option value='1H Plataforma'>1H Plataforma</option>" +
                    "<option value='Hoyo 6'>Hoyo 6</option>" +
                    "<option value='Futbol'>Futbol</option>" +
                    "<option value='Eventos'>Eventos</option>" +
                    "<option value='Clases de Golf'>Clases de Golf</option>" +
                    "<option value='Pelotas de Golf'>Pelotas de Golf</option>" +
                    "<option value='Renta de Equipos'>Renta de Equipos</option>" +
                    "<option value='Torneo'>Torneo</option>" +
                    "<option value='Varios'>Varios</option>" +
                "</select></p>" +
                "<p>Abono: <input type='text' name='Abono'/></p>" +
                "<p>Total: <input type='text' name='Total'/></p>" +
                "<input type='submit' name='Cobrar'/>"+
            "</form>" +
        "</script>";
