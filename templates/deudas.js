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
                "<% _.each(socios, function(socio) { %>" +
                "<tr>" +
                    "<td><% print(socio.Nombre); %></td>" +
                    "<td><% print(socio.Abono); %></td>" +
                    "<td><% print(socio.Total); %></td>" +
                    "<td><a class='watchFact' idsocio='<% print(socio.IdSocio); %>' href='#ccuotas/factura?id=<% print(socio.IdSocio); %>'>Ver</a></td>" +
                "</tr>" +
                "<% }); %>" +
            "</tbody>" +
            "</table>" +
            "</script>";
