TEMPLATES.factura = 
        "<script type='text/template'>" +
        "<% var total = 0; var pago = 0; var deudas = 0; var tdeuda = deuda.Total - deuda.Abono; %>" +
          "<h2>Deudas de <span class='debtor'><% print(deuda.Nombre); %></span></h2>" +
          "<table class='blue-table table-factura' border='1' cellspacing='0' >" +
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
                "<form method='post' action='api/pagarf.php'>" +
                    "<td><% print(factura.Servicio); %></td>" +
                    "<input type='hidden' name='ids' value='<% print(factura.IdSocio); %>'>" +
                    "<input type='hidden' name='idf' value='<% print(factura.IdFactura); %>'>" +
                    "<td><% print(factura.Dia); %>/<% print(factura.Mes); %>/<% print(factura.Year); %></br>" +
                    "<% print(factura.Hora); %></td>" +
                    "<td>$ <input type='text' name='abono' onkeydown='if(event.keyCode == 13){this.form.submit();}' value=' <% print(factura.Abono); %>'></td>" +
                    "<% deudas = factura.Total - factura.Abono; %>" +
                    "<td>$<% print(deudas); %></td>" +
                    "<td>$<% print(factura.Total); %></td>" +
                "</form>" +
                "</tr>" +
                "<% }); %>" +
                "<tr>" +
                  "<td>Total</td>" +
                  "<td></td>" +
                  "<td>$<% print(deuda.Abono); %></td>" +
                  "<td>$<% print(tdeuda); %></td>" +
                  "<td>$<% print(deuda.Total); %></td>" +
                "</tr>" +
            "</tbody>" +
            "</table>" +
            "</script>";
