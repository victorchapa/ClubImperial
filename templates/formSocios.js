TEMPLATES = {
    formSocio:
        "<form id='formSocio' method='post' action='api/AddSocio.php' enctype='multipart/form-data'>" +
        "<h1>Favor de ingresar los datos correspondientes:</h1>" +
        "<div class='clear'>" +
        "<div class='data1'>" +
            "<p>Nombres: <input type='text' name='Nombre' maxlength='30'></p>" +
            "<p>Fecha de Nacimiento: <input class='datePicker' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Parentesco: " +
                "<span><input type='radio' name='Parentesco' value='Padre'> Padre." +
                 "<input type='radio' name='Parentesco' value='Madre'> Madre." +
                 "<input type='radio' name='Parentesco' value='Hijo'> Hijo." +
                 "<input type='radio' name='Parentesco' value='Soltero(a)'> Soltero(a).</span>" +
            "</p>" +
            "<p>Domicilio: <input type='text' name='Domicilio'></p>" +
            "<p>Manzana: <input type='text' name='Manzana'></p>" +
            "<p>Lote: <input type='text' name='Lote'></p>" +
            "<p>Coto: <input type='text' name='Coto'></p>" +
        "</div>" +
        "<div class='data2'>" +
            "<p>Teléfono: <input type='text' name='Telefono' maxlength='10'></p>" +
            "<p>Celular: <input type='text' name='Celular' maxlength='10'></p>" +
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
            "<p>Membresia: <select name='Membresia'>" +
                  "<option value='0'>Elige una opción</option>" +
                  "<option value='Propietario'>Propietario</option>" +
                  "<option value='Rentista'>Rentista</option>" +
                  "<option value='Jr'>Jr</option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                "</select>" +
            "</p>" +
            "<p>Fecha de Alta: <input class='datePicker' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Afiliación: <input type='text' name='Afiliacion' maxlength='30' placeholder='Golfistas, tenistas, etc.'></p>" +
        "</div>" +
        "</div>" +
        "<div class='btnGroup'>" +
            "<p><input id='upLoad' class='display-none' type='file' name='Foto'><input class='btn btnFunctions btnUpLoad' type='button' value='Subir Foto'>" +
            "<input class='btn btnSuccess' type='submit' value='Agregar Usuario'></p>" +
            "<p><span id='fileName'></span></p>" +
        "</div>" +
        "</form>",
    index: 
        "<div class='indexImages'>" +
            "<img src='assets/img/casaclub1.jpg'>" +
            "<img src='assets/img/casaclub2.jpg'>" +
            "<img src='assets/img/casaclub3.jpg'>" +
        "</div>",
    allSocios:
        "<script type='text/template' id='template'>" +
        "<table border='1'>" +
            "<tr>" +
                "<th>Nombre</th>" +
                "<th>Fecha de Nacimiento</th>" +
                "<th>Parentesco</th>" +
                "<th>Domicilio</th>" +
                "<th>Manzana</th>" +
                "<th>Lote</th>" +
                "<th>Coto</th>" +
                "<th>Télefono</th>" +
                "<th>Célular</th>" +
                "<th>Membresia</th>" +
                "<th>Sangre</th>" +
                "<th>Fecha de alta</th>" +
                "<th>Afiliación</th>" +
                "<th>Acciones</th>" +
            "</tr>" +
            "<tr>" +
                "</tr>" +
            "</tbody>" +
            "</table>" +
            "</script>",
};
