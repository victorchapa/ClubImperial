TEMPLATES.editPariente =
"<script type='text/template'>" +
    "<div class='EditParienteForm'>" +
    "<div class='row'>" +
        "<div class='col-md-12'>" +
            "<h3 class='heading-arrow'>Favor de ingresar los datos a Editar:</h3>" +
        "</div>" +
            "<form id='editParienteForm' method='post' action='api/EditPariente.php' enctype='multipart/form-data'>" +
        "<div class='col-md-12'>" +
            "<input type='hidden' name='id' value='<% print(socio.IdSocio); %>'>" +
                "<img class='photoReloadII' src='api/<% print(socio.Foto); %>'>" +
            "<p><input id='upLoadPari' class='display-none' type='file' name='Foto'><input class='btnUpLoadPari btn btn-primary' type='button' value='Editar Foto'></p>" +
            "<p><span class='display-none' id='fileNamePari'></span></p>" +
        "</div>" +
        "<div class='col-md-6'>" +
            "<p><span>Nombres: </span><input type='text' class='input-sm form-control' name='Nombre' maxlength='30' value='<% print(socio.Nombre); %>'></p>" +
            "<p><span>Apellido Paterno: </span><input type='text' class='input-sm form-control' name='ApellidoP' maxlength='30' value='<% print(socio.ApellidoP); %>'></p>" +
            "<p><span>Apellido Materno: </span><input type='text' class='input-sm form-control' name='ApellidoM' maxlength='30' value='<% print(socio.ApellidoM); %>'></p>" +
            "<p><span>Parentesco: </span>" +
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
            "</p>" +
            "<p><span>Fecha de Nacimiento: </span><input class='datePicker input-sm form-control' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' value='<% print(socio.FNacimiento); %>' readonly></p>" +
            "<p><span>Domicilio: </span><input type='text' class='input-sm form-control' name='Domicilio' value='<% print(socio.Domicilio); %>'></p>" +
            "<p><span>Manzana: </span><input type='text' class='input-sm form-control' name='Manzana' value='<% print(socio.Manzana); %>'></p>" +
            "<p><span>Lote: </span><input type='text' class='input-sm form-control' name='Lote' value='<% print(socio.Lote); %>'></p>" +
            "<p><span>Coto: </span><input type='text' class='input-sm form-control' name='Coto' value='<% print(socio.Coto); %>'></p>" +
        "</div>" +
        "<div class='col-md-6'>" +
            "<p><span>Teléfono: </span><input type='text' class='input-sm form-control' name='Telefono' maxlength='10' value='<% print(socio.Telefono); %>'></p>" +
            "<p><span>Celular: </span><input type='text' class='input-sm form-control' name='Celular' maxlength='10' value='<% print(socio.Celular); %>'></p>" +
            "<p><span>Email: </span><input type='text' class='input-sm form-control' name='Correo' value='<% print(socio.Correo); %>'></p>" +
            "<p><span>Tipo de Sangre: </span><select class='input-sm form-control' name='Sangre'>" +
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
            "<p><span>Membresia: </span>" +
                    "<% if(socio.Membresia == 'Propietario') { %>" +
                        "<input type='radio' name='Membresia' value='Propietario' checked='checked'> Propietario. " +
                        "<input type='radio' name='Membresia' value='Rentista'> Rentista. " +
                    "<% }else{ %>" +
                        "<input type='radio' name='Membresia' value='Propietario'> Propietario. " +
                        "<input type='radio' name='Membresia' value='Rentista' checked='checked'> Rentista. " +
                    "<% } %>" +
            "</p>" +
            "<p><span>Tipo de membresia: </span><select class='input-sm form-control' name='TipoMembresia'>" +
                  "<option value='<% print(socio.TipoMembresia); %>'><% print(socio.TipoMembresia); %></option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                  "<option value='Jr'>Jr</option>" +
                "</select>" +
            "</p>" +
            "<p><span>Fecha de Alta: </span><input class='datePicker input-sm form-control' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly value='<% print(socio.FAlta); %>'></p>" +
            "<p><span>Afiliación: </span>" +
                "<% if(socio.Afiliacion.Golf == true) { %>" +
                    "<input type='checkbox' name='Afiliacion[]' value='Golf' checked> Golfista. " +
                "<% }else{%>"+
                    "<input type='checkbox' name='Afiliacion[]' value='Golf'> Golfista. " +
                "<% } %>" +
                "<% if(socio.Afiliacion.Futbol == true) { %>" +
                    "<input type='checkbox' name='Afiliacion[]' value='Futbol' checked> Futbolista. " +
                "<% }else{%>"+
                    "<input type='checkbox' name='Afiliacion[]' value='Futbol'> Futbolista. " +
                "<% } %>" +
                "<% if(socio.Afiliacion.Tenis == true) { %>" +
                    "<input type='checkbox' name='Afiliacion[]' value='Tenis' checked> Tenista. " +
                "<% }else{%>"+
                    "<input type='checkbox' name='Afiliacion[]' value='Tenis'> Tenista. " +
                "<% } %>" +
                "<% if(socio.Afiliacion.Piscina == true) { %>" +
                    "<span></span><input type='checkbox' name='Afiliacion[]' value='Piscina' checked> Piscina. " +
                "<% }else{%>"+
                    "<span></span><input type='checkbox' name='Afiliacion[]' value='Piscina'> Piscina. " +
                "<% } %>" +
                "<% if(socio.Afiliacion.Gym == true) { %>" +
                    "<input type='checkbox' name='Afiliacion[]' value='Gym' checked> GYM. " +
                "<% }else{%>"+
                    "<input type='checkbox' name='Afiliacion[]' value='Gym'> GYM. " +
                "<% } %>" +
                "<% if(socio.Afiliacion.SPA == true) { %>" +
                    "<input type='checkbox' name='Afiliacion[]' value='SPA' checked> SPA. " +
                "<% }else{%>"+
                    "<input type='checkbox' name='Afiliacion[]' value='SPA'> SPA. " +
                "<% } %>" +
            "<p><input class='btn btn-success' type='submit' value='Editar Pariente'></p>" +
        "</div>" +
        "</form>" +
    "</div>" +
    "</div>" +
"</script>";