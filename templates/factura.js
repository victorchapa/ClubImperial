TEMPLATES.factura = 
        "<script type='text/template' id='thisTemplate'>" +
        "<% var total = 0; var pago = 0; var deuda = 0; %>"
          "<h2>Deudas de <% print(deudas.nombre); %></h2>" +
          "<table border='1' cellspacing='0' >" +
          "<thead>" +
            "<tr>" +
                "<th>Socios</th>" +
                "<th>Abono</th>" +
                "<th>Total</th>" +
                "<th>Factura</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(deudas, function(deuda) { %>" +
                "<tr>" +
                    "<td><% print(deuda.Nombre); %></td>" +
                    "<td><% print(deuda.Abono); %></td>" +
                    "<td><% print(socio.Total); %></td>" +
                    "<td><a href='factura.php?id=<% print(socio.IdFactura); %>'>Ver</a></td>" +
                "</tr>" +
                "<% }); %>" +
            "</tbody>" +
            "</table>" +
            "</script>";