TEMPLATES.allSocios = 
        "<script type='text/template' id='thisTemplate'>" + 
          "<table border='1'cellspacing='0' >" +
              "<tr>" +
                "<th>Nombre</th>" +
                "<th>Apellido P.</th>" +
                "<th>Apellido M.</th>" +
                "<th>Fecha de Nacimiento</th>" +
                "<th>Domicilio</th>" +
                "<th>Manzana</th>" +
                "<th>Lote</th>" +
                "<th>Coto</th>" +
                "<th>Télefono</th>" +
                "<th>Célular</th>" +
                "<th>Membresia</th>" +
                "<th>Tipo de membresia</th>" +
                "<th>Tipo de sangre</th>" +
                "<th>Fecha de alta</th>" +
                "<th>Afiliación</th>" +
            "</tr>" +
                "<% _.each(socios, function(socio) { %>" +
                "<tr class='trSocio' idSocio='<% print(socio.IdSocio) %>'>" +
                    "<td><% print(socio.Nombre); %></td>" +
                    "<td><% print(socio.ApellidoP); %></td>" +
                    "<td><% print(socio.ApellidoM); %></td>" +
                    "<td><% print(socio.FNacimiento); %></td>" +
                    "<td><% print(socio.Domicilio); %></td>" +
                    "<td><% print(socio.Manzana); %></td>" +
                    "<td><% print(socio.Lote); %></td>" +
                    "<td><% print(socio.Coto); %></td>" +
                    "<td><% print(socio.Telefono); %></td>" +
                    "<td><% print(socio.Celular); %></td>" +
                    "<td><% print(socio.Membresia); %></td>" +
                    "<td><% print(socio.TipoMembresia); %></td>" +
                    "<td><% print(socio.Sangre); %></td>" +
                    "<td><% print(socio.FAlta); %></td>" +
                    "<td><% print(socio.Afiliacion); %></td>" +
                "</tr>" +
                "<% }); %>" +
            "</table>" +
            "<div class='emergentWindow actionsSocio'>" +
                "<div class='idSocio'>" +
                    "<span class='display-none spanIdSocio'></span>" +
                    "<p id='sSocio'>Ver perfil</p><p id='eSocio'>Editar</p>" +
                "</div>" +
            "</div>" +  
            "</script>";
