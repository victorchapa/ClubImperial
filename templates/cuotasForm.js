TEMPLATES.cuotasForm = 
"<script type='text/template'>" +
    "<div class='row'>" +
        "<div class='col-md-4'>" +
        "<div class='cuotasForm'>" +
            "<div class='well margin-none'>" +
                "<address class='margin-none'>" +
                    "<form id='charges' class='cuotaForm' method='post' action='api/cpago.php' enctype='multipart/form-data'>" +
                        "<h2 class='heading-arrow'>Generar Cobro:</h2>" +
                        "<p>Nombre del Socio: <input class='input-sm form-control' id='socioFinder' type='text' name='Nombre'></p>" +
                        "<p>Concepto: <select class='input-sm form-control getServices' name='Servicio'>" +
                            "<option value='0'>Seleccione una opción</option>" +
                            "<% _.each(services, function(service) { %>" +
                                "<option value='<% print(service.Servicio); %>' cargo='<% print(service.Cargo); %>'><% print(service.Servicio); %></option>" +
                            "<% }); %>" +
                        "</select></p>" +
                        "<p>Deposito: <input type='text' class='input-sm form-control' name='Abono'/></p>" +
                        "<p>Total: <input type='text' class='input-sm form-control' name='Total' readonly/></p>" +
                        "<input class='btn btn-success' type='submit' name='Cobrar' value='Generar'/>"+
                    "</form>" +
                "</adress>" +
            "</div>" +
        "</div>" +
        "</div>" +
            "<div class='factures-window' style='display:none;'>" +
            "</div>" +
        "</div> " +
    "</div>" +
"</script>";
