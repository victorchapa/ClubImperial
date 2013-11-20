TEMPLATES.cargos = 
        "<script type='text/template'>" +
        "<% var total = 0; var pago = 0; var deudas = 0; var tdeuda = deuda.Cargo - deuda.Abono; %>" +
          "<h2>Cargos de <span class='debtor'><% print(deuda.Nombre); %></span></h2>" +
          "<div class='finders'>" +
          "<p>Mes: <select class='fMonth'>" +
                "<option value='0'>Selecciona un mes</option>" +
                "<option value='ene'>Enero</option>" +
                "<option value='feb'>Febrero</option>" +
                "<option value='mar'>Marzo</option>" +
                "<option value='abr'>Abril</option>" +
                "<option value='may'>Mayo</option>" +
                "<option value='jun'>Junio</option>" +
                "<option value='jul'>Julio</option>" +
                "<option value='ago'>Agosto</option>" +
                "<option value='sep'>Septiembre</option>" +
                "<option value='oct'>Octubre</option>" +
                "<option value='nov'>Noviembre</option>" +
                "<option value='dic'>Diciembre</option>" +
            "</select></p>" +
            "<p>Año: <input class='fYear' type='text' placeholder='2013' maxlength='4'/></p>"+
            "<input class='filterBy' type='button' value='Filtrar'>" +
          "</div>" +
          "<table class='blue-table table-factura' border='1' cellspacing='0' >" +
          "<thead>" +
            "<tr>" +
                "<th>Servicio</th>" +
                "<th>Fecha y hora</th>" +
                "<th>Abono</th>" +
                "<th>Deuda</th>" +
                "<th>Cargo</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(facturas, function(factura) { %>" +
                "<tr>" +
                "<form method='post' action='api/pagarf.php'>" +
                    "<td><% print(factura.Servicio); %></td>" +
                    "<input type='hidden' name='ids' value='<% print(factura.IdSocio); %>'>" +
                    "<input type='hidden' name='idf' value='<% print(factura.IdCargo); %>'>" +
                    "<td><% print(factura.Dia); %>/<% print(factura.Mes); %>/<% print(factura.Year); %></br>" +
                    "<% print(factura.Hora); %></td>" +
                    "<td class='Addabono'>$<% print(factura.Abono); %> + <input type='text' name='abono' onkeydown='if(event.keyCode == 13){this.form.submit();}' value=''/></td>" +
                    "<% deudas = factura.Cargo - factura.Abono; %>" +
                    "<td>$<% print(deudas); %></td>" +
                    "<td>$<% print(factura.Cargo); %></td>" +
                "</form>" +
                "</tr>" +
                "<% }); %>" +
                "<tr class='tfooter'>" +
                  "<td>Cargo Total</td>" +
                  "<td></td>" +
                  "<td>$<% print(deuda.Abono); %></td>" +
                  "<td>$<% print(tdeuda); %></td>" +
                  "<td>$<% print(deuda.Cargo); %></td>" +
                "</tr>" +
            "</tbody>" +
            "</table>" +
            "</script>";
