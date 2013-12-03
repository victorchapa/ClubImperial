TEMPLATES.cargos = 
"<script type='text/template'>" +
  "<div class='cargosFinder'>" +
    "<div class='well margin-none'>" +
      "<address class='margin-none'>" +
        "<% var total = 0; var pago = 0; var tcargo = 0; var tsaldo = 0; var tabono = 0; %>" +
          "<h2 class='heading-arrow'>Cargos de <strong><% print(deuda.Nombre); %></strong></h2>" +
          "Mes: <select class='fMonth input-sm form-control'>" +
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
            "</select>" +
            " Año: <input class='fYear input-sm form-control' type='text' placeholder='2013' maxlength='4'/>"+
            " <input class='btn btn-primary' type='button' value='Filtrar'>" +
            "<p><a href='api/cargospdf.php?id=<%print(deuda.IdSocio);%>&m=<%print(deuda.Mes);%>&y=<%print(deuda.Year);%>' target='_blank'><input type='button' class='btn btn-inverse' value='Exportar Pdf'></a> <a href='api/cargosexcel.php?id=<%print(deuda.IdSocio);%>&m=<%print(deuda.Mes);%>&y=<%print(deuda.Year);%>'><input type='button' class='btn btn-inverse' value='Exportar Excel'></a></p>" +
      "</address>" +
    "</div>" +
  "</div>" +
          "<table class='blue-table table-factura table table-primary table-bordered' border='1' cellspacing='0'>" +
          "<thead>" +
            "<tr>" +
                "<th>Fecha y hora</th>" +
                "<th>Concepto</th>" +
                "<th>Cargo</th>" +
                "<th>Deposito</th>" +
                "<th>Saldo</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody>" +
                "<% _.each(facturas, function(factura) { %>" +
                "<tr>" +
                "<form method='post' action='api/pagarf.php'>" +
                    "<td><% print(factura.Dia); %>/<% print(factura.Mes); %>/<% print(factura.Year); %></br>" +
                    "<% print(factura.Hora); %></td>" +
                    "<td><% print(factura.Servicio); %></td>" +
                    "<input type='hidden' name='ids' value='<% print(factura.IdSocio); %>'>" +
                    "<input type='hidden' name='idf' value='<% print(factura.IdCargo); %>'>" +
                    "<% tcargo  = tcargo + parseFloat(factura.Cargo); %>" +
                    "<% tabono  = tabono + parseFloat(factura.Abono); %>" +
                    "<% tsaldo  = tsaldo + parseFloat(factura.Saldo); %>" +
                    "<td>$<% print(factura.Cargo); %></td>" +
                    "<td class='Addabono'><span>$<% print(factura.Abono); %></span><span class='plusAbono' style='display:none;'> + $<input class='input-sm form-control' type='text' name='abono' onkeydown='if(event.keyCode == 13){this.form.submit();}' value=''/></span><i class='glyphicons icon-edit'></i></td>" +
                    "<td>$<% print(factura.Saldo); %></td>" +
                "</form>" +
                "</tr>" +
                "<% }); %>" +
                "<tr class='tfooter'>" +
                  "<td>Cargo Total</td>" +
                  "<td></td>" +
                  "<td>$<% print(tcargo); %></td>" +
                  "<td>$<% print(tabono); %></td>" +
                  "<td>$<% print(tsaldo); %></td>" +
                "</tr>" +
            "</tbody>" +
            "</table>" +
            "</script>";
