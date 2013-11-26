var SocioCargosView = Backbone.View.extend({

    el: "#mainDisplayer",

    events: {
        "click .filterBy"   :   "filterByMY",
        "click .showDebt"   :   "showBalanceFlange",
        "click .showCuota"  :   "showCuotasFlange",
    },

    initialize: function(){
        this.socioId = this.options.socioId; 
        this.router = new ClubImperial.Router();

        var template = TEMPLATES.cuotasNav;
        var compiledTemplate = _.template($(template).html());
        var target = {target: "cargos"};
        $("#mainDisplayer").html(compiledTemplate(target));
        this.render();
    },

    render: function(){

        if($("#factures").length != 1){
            var div = document.createElement("div");
            div.id = "factures";
            $("#cuotaBody").append(div);
        }

        var facturasSocio = new FacturasSocio(this.socioId);
        var deudaSocio = new DeudaSocio(this.socioId);
        facturasSocio.fetch({
            success: function(data){
                var facturas = data.toJSON();
                deudaSocio.fetch({
                    success: function(data){
                        var data = data.toJSON();
                        deuda = data[0];

                        var template = TEMPLATES.cargos;
                        var compiledTemplate = _.template($(template).html());
                        var socio = {facturas: facturas, deuda: deuda};
                        $("#factures").html(compiledTemplate(socio));
                    },
                });

            },
        });
    },

    filterByMY: function(e){
        var monthSelected = $(".fMonth option:selected").val();
        var yearSelected = $(".fYear").val();
        if((monthSelected != 0) && (yearSelected != "")){
            var newLocation = "#ccuotas/factura?id="+this.socioId+"&mes="+ monthSelected + "&year=" + yearSelected;
            window.location.href = newLocation;
        }else if((monthSelected == 0) && (yearSelected != "")){
            var newLocation = "#ccuotas/factura?id="+this.socioId+"&year="+yearSelected;
            window.location.href = newLocation;
        }else if((monthSelected != 0) && (yearSelected == "")){
            var newLocation = "#ccuotas/factura?id="+this.socioId+"&mes="+monthSelected;
            window.location.href = newLocation;
        }else{
            console.log("Ningun filtro llenado");
        }
    },

    showBalanceFlange: function(){
        this.kill();
        this.router.navigate("ccuotas/balance", {trigger: true, replace: true});
    },

    showCuotasFlange: function(){
        console.log("CUOTAS VIEW");
    },

    kill: function(){
        // same as this.$el.remove();
        this.remove();

        // unbind events that are
        // set on this view
        //this.off();

        // remove all models bindings
        // made by this view
        //this.model.off( null, null, this );

        var div = document.createElement("div");
        div.id = "mainDisplayer";
        $(".rigthPanel").append(div);
    },

});
