TEMPLATES.facturesWindow =
        "<script type='text/template'>" +
            "<p>¿Desea generar factura del cobro anterior?</p>" +
            "<a href='api/pdf.php?id=<% print(factureId) %>' target='_blank'>" +
                "<input class='btn btnFunctions' type='button' value='PDF'/>"+
            "</a>" +
            "<a href='api/ecxel.php?id=<% print(factureId) %>'>" +
                "<input class='btn btnFunctions' type='button' value='ECXEL'/>"+
            "</a>" +
        "</script>";
