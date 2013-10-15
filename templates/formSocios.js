TEMPLATES = {
    formSocio:
        "<form id='formSocio' method='post' action='api/AddSocio.php'>" +
        "<h1>Favor de ingresar los datos correspondientes:</h1>" +
        "<p>Nombres: <input type='text' name='Nombre' maxlength='30'></p>" +
        "<p>Fecha de Nacimiento: <input id='datePicker' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' readonly></p>" +
        "<p>Parentesco: <input type='radio' name='Parentesco' value='Padre'> Padre." +
                 "<input type='radio' name='Parentesco' value='Madre'> Madre." +
                 "<input type='radio' name='Parentesco' value='Hijo'> Hijo." +
                 "<input type='radio' name='Parentesco' value='Soltero(a)'> Soltero(a)." +
        "</p>" +
        "<p>Domicilio: <input type='text' name='Domicilio'></p>" +
        "<p>Manzana: <input type='text' name='Manzana'></p>" +
        "<p>Lote: <input type='text' name='Lote'></p>" +
        "<p>Coto: <input type='text' name='Coto'></p>" +
        "<p>Teléfono: <input type='text' name='Telefono' maxlength='10'></p>" +
        "<p>Celular: <input type='text' name='Celular' maxlength='10'></p>" +
        "<p>Sangre: <input type='text' name='Sangre' maxlength='3'></p>" +
        "<p>Membresia: <select name='Membresia'>" +
                  "<option value='0'>Elige una opción</option>" +
                  "<option value='Propietario'>Propietario</option>" +
                  "<option value='Rentista'>Rentista</option>" +
                  "<option value='Jr'>Jr</option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                "</select>" +
        "</p>" +
        "<p>Fecha de Alta: <input id='datePicker' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly></p>" +
        "<p>Afiliación: <input type='text' name='Afiliacion' maxlength='30' placeholder='Golfistas, tenistas, etc.'></p>" +
        "<input type='submit' value='Agregar Usuario'>" +
        "</form>",
    index: 
        "<div class='indexImages'>" +
            "<img src='assets/img/casaclub1.jpg'>" +
            "<img src='assets/img/casaclub2.jpg'>" +
            "<img src='assets/img/casaclub3.jpg'>" +
        "</div>"

};
