TEMPLATES.cuotasNav = 
"<script type='text/template'>" +
    "<div class='widget widget-2 widget-tabs'>" +
        "<div class='widget-head'>" +
            "<ul class='navCuotas'>" +
                "<% if(target == 'cuotas') { %>" +
                "<%} else if(target == 'balance') { %>" +
                "<%} else if(target == 'cargos') { %>" +
                    "<li><a href='#ccuotas/balance' class='glyphicons circle_arrow_left'><i></i>Atras</a></li>" +
                "<% } %>" +
            "</ul>" +
        "</div>" +
        "<div id='cuotaBody'>" +
            "<div id='widget-body'>" +
            "</div>" +
    	"</div>" +
    "</div>" +
"</script>";
