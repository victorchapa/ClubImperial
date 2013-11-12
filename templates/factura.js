TEMPLATES.factura = 
        "<script type='text/template' id='thisTemplate'>" +
        "<% var total = 0; var pago = 0; var deuda = 0; var tdeuda = deudas.Total - deudas.Abono; %>"
          "<h2>Deudas de <% print(deudas.nombre); %></h2>" +
          "<table border='1' cellspacing='0' >" +
          "<thead>" +
            "<tr>" +
                "<th>Servicio</th>" +
                "<th>Fecha y hora</th>" +
                "<th>Abono</th>" +
                "<th>Deuda</th>" +
                "<th>Total</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(facturas, function(factura) { %>" +
                "<tr>" +
                    "<td><% print(factura.Servicio); %></td>" +
                    "<td><% print(factura.Dia); %>/<% print(factura.Mes); %>/<% print(factura.Year); %></br>" +
                    "<% print(factura.Hora); %></td>" +
                    "<td>$<% print(factura.Abono); %></td>" +
                    "<% deuda = factura.Total - factura.Abono; %>" +
                    "<td>$<% print(deuda); %></td>" +
                    "<td>$<% print(factura.Total); %></td>" +
                "</tr>" +
                "<% }); %>" +
                "<tr>" +
                  "<td>Total</td>" +
                  "<td></td>" +
                  "<td><% print(deuda.Abono); %></td>" +
                  "<td><% print(tdeuda); %></td>" +
                  "<td><% print(deuda.Total); %></td>" +
                "</tr>" +
            "</tbody>" +
            "</table>" +
            "</script>";