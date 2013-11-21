TEMPLATES.balance = 
        "<script type='text/template'>" + 
          "<div class='balanceHeader'>" +
            "<h2>Balance TOTAL</h2>" +
            "<input class='findSocioBal' type='text' placeholder=' <~ Buscar'/>" +
          "</div>" +
          "<table class='blue-table table-deudas' border='1' cellspacing='0' >" +
          "<thead>" +
            "<tr>" +
                "<th>Socios</th>" +
                "<th>Cargo</th>" +
                "<th>Abono</th>" +
                "<th>Lista</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(socios, function(socio) { %>" +
                "<tr id='watchSocio<% print(socio.IdSocio) %>'>" +
                    "<td><% print(socio.Nombre); %></td>" +
                    "<td>$<% print(socio.Cargo); %></td>" +
                    "<td>$<% print(socio.Abono); %></td>" +
                    "<td><a class='watchFact' idsocio='<% print(socio.IdSocio); %>' href='#ccuotas/factura?id=<% print(socio.IdSocio); %>'>Ver</a></td>" +
                "</tr>" +
                "<% }); %>" +
            "</tbody>" +
            "</table>" +
            "</script>";
