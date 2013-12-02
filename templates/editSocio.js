TEMPLATES.editSocio =
"<script type='text/template'>" +
"<div class='EditSocioForm'>" +
"<div class='well margin-none'>" +
    "<address class='margin-none'>" +
        "<div class='row'>" +
            "<div class='col-md-10'>" +
                "<h1 class='heading-arrow'>Favor de ingresar los datos a Editar:</h1>" +
                "<form method='post' action='api/EditSocio.php' enctype='multipart/form-data'>" +
                "<input type='hidden' name='id' value='<% print(socio.IdSocio); %>'>" +
                "<div class='fotoSocioEdit'>" +
                    "<img class='photoReload' src='api/<% print(socio.Foto); %>'>" +
                    "<input id='upLoad' class='display-none' type='file' name='Foto'><input class='btn btn-primary' id='edit' type='button' value='Editar Foto'>" +
                    "<p><span class='display-none' id='fileName'></span></p>" +
                "</div>" +
            "</div>" +
            "<div class='col-md-5'>" +
                "<p><span>Nombres: </span><input type='text' class='input-sm form-control' name='Nombre' maxlength='30' value='<% print(socio.Nombre); %>'></p>" +
                "<p><span>Apellido Paterno: </span><input type='text' class='input-sm form-control' name='ApellidoP' maxlength='30' value='<% print(socio.ApellidoP); %>'></p>" +
                "<p><span>Apellido Materno: </span><input type='text' class='input-sm form-control' name='ApellidoM' maxlength='30' value='<% print(socio.ApellidoM); %>'></p>" +
                "<p><span>Fecha de Nacimiento: </span><input class='datePicker input-sm form-control' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' value='<% print(socio.FNacimiento); %>' readonly></p>" +
                "<p><span>Domicilio: </span><input type='text' class='input-sm form-control' name='Domicilio' value='<% print(socio.Domicilio); %>'></p>" +
                "<p><span>Manzana: </span><input type='text' class='input-sm form-control' name='Manzana' value='<% print(socio.Manzana); %>'></p>" +
                "<p><span>Lote: </span><input type='text' class='input-sm form-control' name='Lote' value='<% print(socio.Lote); %>'></p>" +
                "<p><span>Coto: </span><input type='text' class='input-sm form-control' name='Coto' value='<% print(socio.Coto); %>'></p>" +
            "</div>" +
            "<div class='col-md-5'>" +
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
                    "</span>" +
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
                        "<span><input type='checkbox' name='Afiliacion[]' value='SPA' checked> SPA. " +
                    "<% }else{%>"+
                        "<input type='checkbox' name='Afiliacion[]' value='SPA'> SPA. " +
                    "<% } %>" +
                    "</p>" +
            "</div>" +
            "<div class='col-md-10'>" +
                "<div class='memoField'>Parientes: </div>" +
                    "<div class='btnGroupII'>" +
                        "<input class='btn btnAddPari' type='button' value='+'>" +
                        "<input class='btn btnDelPari' type='button' value='-' disabled>" +
                        "<input class='btn btnEditPari' type='button' value=' 'disabled>" +
                        "<input type='text' class='input-sm form-control' value='' placeholder='¿Algun pariente?' disabled>" +
                    "</div>" +
                "<div class='btnGroup'>" +
                    "<p><input class='btn btn-success' type='submit' value='Editar Usuario'></p>" +
                "</div>" +
            "</div>" +
            "</form>" +
        "</div>" +
    "</adress>" +
    "</div>" +
"</div>" +
"</script>";