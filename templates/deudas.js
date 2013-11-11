TEMPLATES.deudas = 
        "<script type='text/template' id='thisTemplate'>" + 
          "<h2>Lista de pagos</h2>" +
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