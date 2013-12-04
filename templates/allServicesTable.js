TEMPLATES.allServicesTable = 
"<script type='text/template'>" +
    "<div class='row'>" +
        "<div class='col-md-4'>" +
            "<div class='well margin-none'>" +
                "<address class='margin-none'>" +
                    "<table class='blue-table table-factura table table-primary table-bordered' border='1' cellspacing='0'>" +
                        "<thead>" +
                            "<tr>" +
                                "<th>Tipo de servicio</th>" +
                                "<th>Servicio</th>" +
                                "<th>Cargo</th>" +
                            "</tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<% _.each(recurrentes, function(recurrente) { %>" +
                                "<% console.log(recurrente); %>" +
                                "<tr>" +
                                    "<td>Recurrente</td>" +
                                    "<td><% print(recurrente.Servicio); %></td>" +
                                    "<td>$<% print(recurrente.Cargo); %></td>" +
                                "</tr>" +
                            "<% }); %>" +
                            "<% _.each(normales, function(normal) { %>" +
                                "<% console.log(normal); %>" +
                                "<tr>" +
                                    "<td>Normal</td>" +
                                    "<td><% print(normal.Servicio); %></td>" +
                                    "<td>$<% print(normal.Cargo); %></td>" +
                                "</tr>" +
                            "<% }); %>" +
                        "</tbody>" +
                    "</table>" +
                "</address>" +
            "</div>" +
        "</div>" +
    "</div>" +
"</script>";


