TEMPLATES.facturesWindow =
        "<script type='text/template'>" +
            "<a href='#ccuotas'>" +
                "<input class='close' type='button' value='×'/>" +
            "</a>" +
            "<p>¿Desea generar factura del cobro anterior?</p>" +
            "<a href='api/pdf.php?id=<% print(factureId) %>' target='_blank'>" +
                "<input class='btn btnFunctions btnFacture' type='button' value='PDF'/>"+
            "</a>" +
            "<a href='api/excel.php?id=<% print(factureId) %>'>" +
                "<input class='btn btnFunctions btnFacture' type='button' value='EXCEL'/>"+
            "</a>" +
        "</script>";
