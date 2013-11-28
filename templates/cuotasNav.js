TEMPLATES.cuotasNav = 
"<script type='text/template'>" +
    "<div class='widget widget-2 widget-tabs'>" +
        "<div class='widget-head'>" +
            "<ul class='navCuotas'>" +
                "<% if(target == 'cuotas') { %>" +
                    "<li class='showCuota active'><p class='uppercase'>CUOTAS</p><input type='hidden' value='charges'/></li>" +
                    "<li class='showDebt'><p class='uppercase'>BALANCE</p><input type='hidden' value='allDebts'/></li>" +
                    "<li class='showFact'><p class='uppertcase'>CARGOS</p><input type='hidden' value='factures'/></li>" +
                "<%} else if(target == 'balance') { %>" +
                    "<li class='showCuota'><p class='uppercase'>CUOTAS</p><input type='hidden' value='charges'/></li>" +
                    "<li class='showDebt active'><p class='uppercase'>BALANCE</p><input type='hidden' value='allDebts'/></li>" +
                    "<li class='showFact'><p class='uppertcase'>CARGOS</p><input type='hidden' value='factures'/></li>" +
                "<%} else if(target == 'cargos') { %>" +
                    "<li class='showCuota'><p class='uppercase'>CUOTAS</p><input type='hidden' value='charges'/></li>" +
                    "<li class='showDebt'><p class='uppercase'>BALANCE</p><input type='hidden' value='allDebts'/></li>" +
                    "<li class='showFact active'><p class='uppertcase'>CARGOS</p><input type='hidden' value='factures'/></li>" +
                "<% } %>" +
            "</ul>" +
        "</div>" +
        "<div id='cuotaBody'>" +
            "<div id='widget-body'>" +
            "</div>" +
    	"</div>" +
    "</div>" +
"</script>";