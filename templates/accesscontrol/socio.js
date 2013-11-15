TEMPLATES.socio =
    "<script type='text/template'>" +
        "<div class='socioAccess'>" +
            "<div class='imgContainer'>" +
                "<img class='fotoSocio' src='api/<% print(socioData.socio[0].Foto); %>'>" +
            "</div>" +
            "<div class='dataAccess'>" +
                "<p><span class='bold'>Nombre:</span> <% print(socioData.socio[0].Filtro); %></p>" +
                "<% if(socioData.acceso != false) { %>" +
                    "<p><span class='bold'>Ultimo acceso:</span> <% print(socioData.acceso[0].FechaA); %> a las <% print(socioData.acceso[0].HoraA); %>.</p>" +
                "<% } else { %>" +
                    "<p><span class='bold'>Ultimo acceso:</span> No ha tenido Acceso.</p>" +
                "<% } %>" +
            "</div>" +
            "<p>" +
                "<a href='api/access.php?id=<% print(socioData.socio[0].IdSocio); %>'>" +
                    "<input type='button' class='btn btnSuccess' value='Acceso'>" +
                "</a>" +
            "</p>" +
        "</div>" +
    "</script>";
