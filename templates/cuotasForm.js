TEMPLATES.cuotasForm = 
"<script type='text/template'>" +
    "<div class='row'>" +
            "<div class='col-md-4'>" +
                "<form id='charges' class='cuotaForm' method='post' action='api/cpago.php' enctype='multipart/form-data'>" +
                    "<h2>Generar Cobro:</h2>" +
                    "<p>Nombre de Cliente: <input class='input-sm form-control' id='socioFinder' type='text' name='Nombre'></p>" +
                    "<p>Servicio: <select class='input-sm form-control' name='Servicio'>" +
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
                    "<p>Abono: <input type='text' class='input-sm form-control' name='Abono'/></p>" +
                    "<p>Total: <input type='text' class='input-sm form-control' name='Total'/></p>" +
                    "<input class='btn btn-success' type='submit' name='Cobrar'/>"+
                "</form>" +
            "</div>" +
            "<div class='factures-window' style='display:none;'>" +
            "</div>" +
    "</div>" +
"</script>";