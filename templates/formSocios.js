TEMPLATES.formSocio =
    "<div class='row'>" +
<<<<<<< HEAD
        "<div class='editSocioForm'>" +
        "<div class='col-md-12'>" +
            "<h1>Favor de ingresar los datos correspondientes:</h1>" +
        "</div>" +
        "<div class='col-md-5'>" +
=======
        "<div class='col-md-12'>" +
            "<h1>Favor de ingresar los datos correspondientes:</h1>" +
        "</div>" +
        "<div class='col-md-6'>" +
>>>>>>> Added styling to all the forms
        "<form id='formSocio' method='post' action='api/AddSocio.php' enctype='multipart/form-data'>" +
            "<p>Nombres: <input type='text' class='input-sm form-control' name='Nombre' maxlength='30'></p>" +
            "<p>Apellido Paterno: <input type='text' class='input-sm form-control' name='ApellidoP' maxlength='30'></p>" +
            "<p>Apellido Materno: <input type='text' class='input-sm form-control' name='ApellidoM' maxlength='30'></p>" +
            "<p>Fecha de Nacimiento: <input class='datePicker input-sm form-control' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Domicilio: <input type='text' class='input-sm form-control' name='Domicilio'></p>" +
            "<p>Manzana: <input type='text' class='input-sm form-control' name='Manzana'></p>" +
            "<p>Lote: <input type='text' class='input-sm form-control' name='Lote'></p>" +
            "<p>Coto: <input type='text' class='input-sm form-control' name='Coto'></p>" +
        "</div>" +
<<<<<<< HEAD
        "<div class='col-md-5'>" +
=======
        "<div class='col-md-6'>" +
>>>>>>> Added styling to all the forms
            "<p>Teléfono: <input type='text' class='input-sm form-control' name='Telefono' maxlength='10'></p>" +
            "<p>Celular: <input type='text' class='input-sm form-control' name='Celular' maxlength='10'></p>" +
            "<p>Email: <input type='text' class='input-sm form-control' name='Correo'></p>" +
            "<p>Tipo de Sangre: <select name='Sangre' class='input-sm form-control'>" +
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
            "<p>Membresia: </p>" +
            "<p><input type='radio' name='Membresia' value='Propietario'> Propietario. " +
            "<input type='radio' name='Membresia' value='Rentista'> Rentista.</p>" +
            "</p>" +
            "<p>Tipo de membresia: <select name='TipoMembresia' class='input-sm form-control'>" +
                  "<option value='0'>Elige una opción</option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                  "<option value='Jr'>Jr</option>" +
                "</select>" +
            "</p>" +
            "<p>Fecha de Alta: <input class='datePicker input-sm form-control' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Afiliación: </p>" +
                "<p><input type='checkbox' name='Afiliacion[]' value='Golf'> Golfista. " +
                "<input type='checkbox' name='Afiliacion[]' value='Futbol'> Futbolista. " +
                "<input type='checkbox' name='Afiliacion[]' value='Tenista'> Tenista. </p>" +
                "<p><input type='checkbox' name='Afiliacion[]' value='Piscina'> Piscina. " +
                "<input type='checkbox' name='Afiliacion[]' value='Gym'> GYM. " +
                "<input type='checkbox' name='Afiliacion[]' value='SPA'> SPA. </span></p>" +
        "</div>" +
<<<<<<< HEAD
        "<div class='col-md-8'>" +
            "<p><input id='upLoad' class='display-none' type='file' name='Foto' accept='image/jpeg, image/bmp'><input class='btn btnFunctions btnUpLoad' type='button' value='Subir Foto'>" +
            "<input class='btn btn-success' type='submit' value='Agregar Usuario'></p>" +
            "<p><span id='fileName'></span></p>" +
        "</div>" +
=======
        "<div class='col-md-12'>" +
            "<p><input id='upLoad' class='display-none' type='file' name='Foto' accept='image/jpeg, image/bmp'><input class='btn btnFunctions btnUpLoad' type='button' value='Subir Foto'>" +
            "<input class='btn btn-success' type='submit' value='Agregar Usuario'></p>" +
            "<p><span id='fileName'></span></p>" +
>>>>>>> Added styling to all the forms
        "</div>";