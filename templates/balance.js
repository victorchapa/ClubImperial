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
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(socios, function(socio) { %>" +
                "<tr class='trSocio' idsocio='<% print(socio.IdSocio); %>' id='watchSocio<% print(socio.IdSocio) %>'>" +
                    "<td><% print(socio.Nombre); %></td>" +
                    "<td>$<% print(socio.Cargo); %></td>" +
                    "<td>$<% print(socio.Abono); %></td>" +
                "</tr>" +
                "<% }); %>" +
            "</tbody>" +
            "</table>" +
            "<div class='emergentWindow actionsSocio'>" +
                "<div class='idSocio'>" +
                    "<span class='display-none spanIdSocio'></span>" +
                    "<p class='showDetails'>Ver Detalles</p>" +
                "</div>" +
            "</div>" +  
            "</script>";
