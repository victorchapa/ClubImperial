TEMPLATES.formParientes =
"<script type='text/template'>" +
        "<div class='ParienteForm'>" +
            "<div class='row'>" +
                "<form method='post' action='api/AddPariente.php' enctype='multipart/form-data'>" +
                    "<div class='col-md-12'>" +
                        "<h3 class='heading-arrow'>Favor de ingresar los datos correspondientes del Pariente: </h3>" +
                    "</div>" +
                    "<div class='col-md-6'>" +
                        "<input type='hidden' name='IdSocio' value='<% print(idPariente); %>'>" +
                        "<p><span>Nombres: </span><input type='text' class='input-sm form-control' name='Nombre' maxlength='30'></p>" +
                        "<p><span>Apellido Paterno: </span><input type='text' class='input-sm form-control' name='ApellidoP' maxlength='30'></p>" +
                        "<p><span>Apellido Materno: </span><input type='text' class='input-sm form-control' name='ApellidoM' maxlength='30'></p>" +
                        "<p><span>Parentesco: </span>" +
                               "<input type='radio' name='Parentesco' value='Esposo'> Esposo. " +
                               "<input type='radio' name='Parentesco' value='Esposa'> Esposa. " +
                               "<input type='radio' name='Parentesco' value='Hijo'> Hijo. " +
                        "</p>" +
                        "<p><span>Fecha de Nacimiento: </span><input class='datePicker input-sm form-control' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' readonly></p>" +
                        "<p><span>Domicilio: </span><input type='text' class='input-sm form-control' name='Domicilio'></p>" +
                        "<p><span>Manzana: </span><input type='text' class='input-sm form-control' name='Manzana'></p>" +
                        "<p><span>Lote: </span><input type='text' class='input-sm form-control' name='Lote'></p>" +
                        "<p><span>Coto: </span><input type='text' class='input-sm form-control' name='Coto'></p>" +
                    "</div>" +
                    "<div class='col-md-6'>" +
                        "<p><span>Teléfono: </span><input type='text' class='input-sm form-control' name='Telefono' maxlength='10'></p>" +
                        "<p><span>Celular: </span><input type='text' class='input-sm form-control' name='Celular' maxlength='10'></p>" +
                        "<p><span>Email: </span><input type='text' class='input-sm form-control' name='Correo'></p>" +
                        "<p><span>Tipo de Sangre: </span><select name='Sangre' class='input-sm form-control'>" +
                            "<option value='0'>Elige el tipo</option>" +
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
                        "<input type='radio' name='Membresia' value='Propietario'> Propietario. " +
                        "<input type='radio' name='Membresia' value='Rentista'> Rentista. " +
                        "</p>" +
                        "<p><span>Tipo de membresia: </span><select class='input-sm form-control' name='TipoMembresia'>" +
                              "<option value='0'>Elige una opción</option>" +
                              "<option value='Familiar'>Familiar</option>" +
                              "<option value='Individual'>Individual</option>" +
                              "<option value='Jr'>Jr</option>" +
                            "</select>" +
                        "</p>" +
                        "<p><span>Fecha de Alta: </span><input class='datePicker input-sm form-control' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly></p>" +
                        "<p><span>Afiliación: </span>" +
                            "<input type='checkbox' name='Afiliacion[]' value='Golf'> Golfista. " +
                            "<input type='checkbox' name='Afiliacion[]' value='Futbol'> Futbolista. " +
                            "<input type='checkbox' name='Afiliacion[]' value='Tenis'> Tenista. </p>" +
                            "<span></span><input type='checkbox' name='Afiliacion[]' value='Piscina'> Piscina. " +
                            "<input type='checkbox' name='Afiliacion[]' value='Gym'> GYM. " +
                            "<input type='checkbox' name='Afiliacion[]' value='SPA'> SPA. </p>" +
                        "<p><input id='upLoadPariente' class='display-none' type='file' name='Foto' accept='image/jpeg, image/bmp'> <input class='btnUpLoadPariente btn btn-primary' type='button' value='Subir Foto'>" +
                        " <input class='btn btn-success' type='submit' value='Guardar'></p>" +
                        "<p><span id='fileNamePariente'></span></p>" +
                    "</div>" +
                "</form>" +
            "</div>" +
        "</div>" +
"</script>";