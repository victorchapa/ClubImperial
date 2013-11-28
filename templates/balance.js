TEMPLATES.balance = 
        "<script type='text/template'>" +
          "<div class='balanceHeader'>" +
            "<h2>Balance TOTAL</h2>" +
            "<% var ctotal = 0; var atotal = 0; %>" +
            "<input class='findSocioBal' type='text' placeholder=' <~ Buscar'/>" +
          "</div>" +
          "<table class='blue-table table-deudas' border='1' cellspacing='0' >" +
          "<thead>" +
            "<tr>" +
                "<th>Socios</th>" +
                "<th>Cargo</th>" +
                "<th>Abono</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(socios, function(socio) { %>" +
                "<tr class='trSocio' idsocio='<% print(socio.IdSocio); %>' id='watchSocio<% print(socio.IdSocio) %>'>" +
                    "<td><% print(socio.Nombre); %></td>" +
                    "<td>$<% print(socio.Cargo); %></td>" +
                    "<% ctotal = ctotal + parseFloat(socio.Cargo); %>" +
                    "<td>$<% print(socio.Abono); %></td>" +
                    "<% atotal = atotal + parseFloat(socio.Abono); %>" +
                "</tr>" +
                "<% }); %>" +
                "<tr>" +
                    "<td>Total</td>" +
                    "<td>$<% print(ctotal); %></td>" +
                    "<td>$<% print(atotal); %></td>" +
                "</tr>" +
            "</tbody>" +
            "</table>" +
            "<div class='emergentWindow actionsSocio'>" +
                "<div class='idSocio'>" +
                    "<span class='display-none spanIdSocio'></span>" +
                    "<p class='showDetails'>Ver Detalles</p>" +
                "</div>" +
            "</div>" +
            "</script>";