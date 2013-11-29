TEMPLATES.editPariente =
"<script type='text/template'>" +
    "<div class='editParienteForm'>" +
    "<div class='row'>" +
        "<div class='col-md-12'>" +
            "<h1>Favor de ingresar los datos a Editar:</h1>" +
        "</div>" +
            "<form id='editParienteForm' method='post' action='api/EditPariente.php' enctype='multipart/form-data'>" +
        "<div class='col-md-12'>" +
            "<input type='hidden' name='id' value='<% print(socio.IdSocio); %>'>" +
                "<img class='photoReloadII' src='api/<% print(socio.Foto); %>'>" +
            "<p><input id='upLoadPari' class='display-none' type='file' name='Foto'><input class='btn btn-primary' type='button' value='Editar Foto'></p>" +
            "<p><span class='display-none' id='fileNamePari'></span></p>" +
        "</div>" +
        "<div class='col-md-6'>" +
            "<p>Nombres: <input type='text' class='input-sm form-control' name='Nombre' maxlength='30' value='<% print(socio.Nombre); %>'></p>" +
            "<p>Apellido Paterno: <input type='text' class='input-sm form-control' name='ApellidoP' maxlength='30' value='<% print(socio.ApellidoP); %>'></p>" +
            "<p>Apellido Materno: <input type='text' class='input-sm form-control' name='ApellidoM' maxlength='30' value='<% print(socio.ApellidoM); %>'></p>" +
            "<p>Parentesco: " +
                "<span>"+
                    "<% if(socio.Parentesco == 'Esposo') { %>" +
                        "<input type='radio' name='Parentesco' value='Esposo' checked='checked'> Esposo. " +
                    "<%} else { %>" +
                        "<input type='radio' name='Parentesco' value='Esposo'> Esposo. " +
                    "<% } %>" +
                    "<% if(socio.Parentesco == 'Esposa') { %>" +
                        "<input type='radio' name='Parentesco' value='Esposa' checked='checked'> Esposa. " +
                    "<%} else { %>" +
                        "<input type='radio' name='Parentesco' value='Esposa'> Esposa. " +
                    "<% } %>" +
                    "<% if(socio.Parentesco == 'Hijo') { %>" +
                        "<input type='radio' name='Parentesco' value='Hijo' checked='checked'> Hijo. " +
                    "<%} else { %>" +
                        "<input type='radio' name='Parentesco' value='Hijo'> Hijo. " +
                    "<% } %>" +
                 "</span>" +
            "</p>" +
            "<p>Fecha de Nacimiento: <input class='datePicker input-sm form-control' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' value='<% print(socio.FNacimiento); %>' readonly></p>" +
            "<p>Domicilio: <input type='text' class='input-sm form-control' name='Domicilio' value='<% print(socio.Domicilio); %>'></p>" +
            "<p>Manzana: <input type='text' class='input-sm form-control' name='Manzana' value='<% print(socio.Manzana); %>'></p>" +
            "<p>Lote: <input type='text' class='input-sm form-control' name='Lote' value='<% print(socio.Lote); %>'></p>" +
            "<p>Coto: <input type='text' class='input-sm form-control' name='Coto' value='<% print(socio.Coto); %>'></p>" +
        "</div>" +
        "<div class='col-md-6'>" +
            "<p>Teléfono: <input type='text' class='input-sm form-control' name='Telefono' maxlength='10' value='<% print(socio.Telefono); %>'></p>" +
            "<p>Celular: <input type='text' class='input-sm form-control' name='Celular' maxlength='10' value='<% print(socio.Celular); %>'></p>" +
            "<p>Email: <input type='text' class='input-sm form-control' name='Correo' value='<% print(socio.Correo); %>'></p>" +
            "<p>Tipo de Sangre: <select class='input-sm form-control' name='Sangre'>" +
                "<option value='<% print(socio.Sangre); %>'><% print(socio.Sangre); %></option>" +
                "<option value='O-'>O-</option>" +
                "<option value='O+'>O+</option>" +
                "<option value='A-'>A-</option>" +
                "<option value='A+'>A+</option>" +
                "<option value='B-'>B-</option>" +
                "<option value='B+'>B+</option>" +
                "<option value='AB-'>AB-</option>" +
                "<option value='AB+'>AB+</option>" +
                "</select>" +
            "</p>" +
            "<p>Membresia: " +
                "<span>" +
                    "<% if(socio.Membresia == 'Propietario') { %>" +
                        "<input type='radio' name='Membresia' value='Propietario' checked='checked'> Propietario. " +
                        "<input type='radio' name='Membresia' value='Rentista'> Rentista. " +
                    "<% }else{ %>" +
                        "<input type='radio' name='Membresia' value='Propietario'> Propietario. " +
                        "<input type='radio' name='Membresia' value='Rentista' checked='checked'> Rentista. " +
                    "<% } %>" +
                "</span>" +
            "</p>" +
            "<p>Tipo de membresia: <select class='input-sm form-control' name='TipoMembresia'>" +
                  "<option value='<% print(socio.TipoMembresia); %>'><% print(socio.TipoMembresia); %></option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                  "<option value='Jr'>Jr</option>" +
                "</select>" +
            "</p>" +
            "<p>Fecha de Alta: <input class='datePicker input-sm form-control' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly value='<% print(socio.FAlta); %>'></p>" +
            "<p>Afiliación: </p>" +
                "<% if(socio.Afiliacion.Golf == true) { %>" +
                    "<span><input type='checkbox' name='Afiliacion[]' value='Golf' checked> Golfista. </span>" +
                "<% }else{%>"+
                    "<span><input type='checkbox' name='Afiliacion[]' value='Golf'> Golfista. </span>" +
                "<% } %>" +
                "<% if(socio.Afiliacion.Futbol == true) { %>" +
                    "<span><input type='checkbox' name='Afiliacion[]' value='Futbol' checked> Futbolista. </span>" +
                "<% }else{%>"+
                    "<span><input type='checkbox' name='Afiliacion[]' value='Futbol'> Futbolista. </span>" +
                "<% } %>" +
                "<% if(socio.Afiliacion.Tenis == true) { %>" +
                    "<span><input type='checkbox' name='Afiliacion[]' value='Tenis' checked> Tenista. </span><br>" +
                "<% }else{%>"+
                    "<span><input type='checkbox' name='Afiliacion[]' value='Tenis'> Tenista. </span><br>" +
                "<% } %>" +
                "<% if(socio.Afiliacion.Piscina == true) { %>" +
                    "<span><input type='checkbox' name='Afiliacion[]' value='Piscina' checked> Piscina. </span>" +
                "<% }else{%>"+
                    "<span><input type='checkbox' name='Afiliacion[]' value='Piscina'> Piscina. </span>" +
                "<% } %>" +
                "<% if(socio.Afiliacion.Gym == true) { %>" +
                    "<span><input type='checkbox' name='Afiliacion[]' value='Gym' checked> GYM. </span>" +
                "<% }else{%>"+
                    "<span><input type='checkbox' name='Afiliacion[]' value='Gym'> GYM. </span>" +
                "<% } %>" +
                "<% if(socio.Afiliacion.SPA == true) { %>" +
                    "<span><input type='checkbox' name='Afiliacion[]' value='SPA' checked> SPA. </span>" +
                "<% }else{%>"+
                    "<span><input type='checkbox' name='Afiliacion[]' value='SPA'> SPA. </span>" +
                "<% } %>" +
            "<p><input class='btn btn-success' type='submit' value='Editar Pariente'></p>" +
        "</div>" +
        "</form>" +
    "</div>" +
    "</div>" +
"</script>";