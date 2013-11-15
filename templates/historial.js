TEMPLATES.historial = 
        "<script type='text/template'>" +
          "<h2>Historial de acceso</h2>" +
          "<table class='blue-table table-factura' border='1' cellspacing='0' >" +
          "<thead>" +
            "<tr>" +
                "<th>Nombre</th>" +
                "<th>Fecha de acceso</th>" +
                "<th>Hora de acceso</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(historial, function(hist) { %>" +
                "<tr>" +
                    "<td><% print(hist.Nombre); %></td>" +
                    "<td><% print(hist.FechaA); %></td>" +
                    "<td>$<% print(hist.HoraA); %></td>" +
                "</tr>" +
                "<% }); %>" +
            "</tbody>" +
            "</table>" +
            "</script>";