TEMPLATES.formParientes =
        "<script type='text/template'>" + 
        "<form id='formPariente' method='post' action='api/AddPariente.php' enctype='multipart/form-data'>" +
        "<h1>Favor de ingresar los datos correspondientes del Pariente:</h1>" +
        "<div class='clear'>" +
        "<div class='data1'>" +
            "<input type='hidden' name='IdSocio' value='<% print(idPariente); %>'>" +
            "<p>Nombres: <input type='text' name='Nombre' maxlength='30'></p>" +
            "<p>Apellido Paterno: <input type='text' name='ApellidoP' maxlength='30'></p>" +
            "<p>Apellido Materno: <input type='text' name='ApellidoM' maxlength='30'></p>" +
            "<p>Parentesco: " +
                "<span>"+
                    "<input type='radio' name='Parentesco' value='Esposo'> Esposo." +
                   "<input type='radio' name='Parentesco' value='Esposa'> Esposa." +
                   "<input type='radio' name='Parentesco' value='Hijo'> Hijo." +
                 "</span>" +
            "</p>" +
            "<p>Fecha de Nacimiento: <input class='datePicker' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Domicilio: <input type='text' name='Domicilio'></p>" +
            "<p>Manzana: <input type='text' name='Manzana'></p>" +
            "<p>Lote: <input type='text' name='Lote'></p>" +
            "<p>Coto: <input type='text' name='Coto'></p>" +
        "</div>" +
        "<div class='data2'>" +
            "<p>Teléfono: <input type='text' name='Telefono' maxlength='10'></p>" +
            "<p>Celular: <input type='text' name='Celular' maxlength='10'></p>" +
            "<p>Email: <input type='text' name='Correo'></p>" +
            "<p>Tipo de Sangre: <select name='Sangre'>" +
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
            "<p>Membresia: " +
            "<span><input type='radio' name='Membresia' value='Propietario'> Propietario." +
            "<input type='radio' name='Membresia' value='Rentista'> Rentista.</span>" +
            "</p>" +
            "<p>Tipo de membresia: <select name='TipoMembresia'>" +
                  "<option value='0'>Elige una opción</option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                  "<option value='Jr'>Jr</option>" +
                "</select>" +
            "</p>" +
            "<p>Fecha de Alta: <input class='datePicker' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Afiliación: " + 
                "<span><span><input type='checkbox' name='Afiliacion[]' value='Golf'> Golfista.</span>" +
                "<span><input type='checkbox' name='Afiliacion[]' value='Futbol'> Futbolista.</span>" +
                "<span><input type='checkbox' name='Afiliacion[]' value='Tenis'> Tenista.</span><br>" +
                "<span><input type='checkbox' name='Afiliacion[]' value='Piscina'> Piscina.</span>" +
                "<span><input type='checkbox' name='Afiliacion[]' value='Gym'> GYM.</span>" +
                "<span><input type='checkbox' name='Afiliacion[]' value='SPA'> SPA.</span></span>" +
            "</p>" +
        "</div>" +
        "</div>" +
        "<div class='btnGroup'>" +
            "<p><input id='upLoadPariente' class='display-none' type='file' name='Foto' accept='image/jpeg, image/bmp'><input class='btn btnFunctions btnUpLoadPariente' type='button' value='Subir Foto'>" +
            "<input class='btn btnSuccess' type='submit' value='Agregar Pariente'></p>" +
            "<p><span id='fileNamePariente'></span></p>" +
        "</div>" +
        "</form>" +
        "</script>";
