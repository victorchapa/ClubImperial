var CuotasView = Backbone.View.extend({
    
    el: "#mainDisplayer",

    events:{
        "keydown #socioFinder"  :   "refetchCollection",
        "click .showCuota"      :   "showCuotaForm",
        "click .showDebt"       :   "showDebtForm",
        "click .showFact"       :   "showFactForm",
        "click .watchFact"      :   "showSocioFactureTable",
    },
    
    setFlange: function(target){
        var lis = $(".navCuotas li");
        _.each(lis, function(li){
            var textLi = $("p", li).text();
            var typeFlange = $("input[type='hidden']", li).val();
            if(target == textLi){
                $(li).addClass("active");
                $("#"+typeFlange).show();;
            }else{
                $(li).removeClass("active");
                $("#"+typeFlange).hide();;
            }
        });
    },

    showCuotaForm: function(e){
        console.log("Show Cuota");
        var target = $(e.target).text();
        this.setFlange(target); 
    },

    showDebtForm: function(e){
        if($("#allDebts").length != 1){
            var div = document.createElement("div");
            div.id = "allDebts";
            $("#cuotaBody").append(div);
        }
        var target = $(e.target).text();
        this.setFlange(target); 
        var template = TEMPLATES.deudas;
        var compiledTemplate = _.template($(template).html());
        var deudasCollection = new DeudasCollection();
        deudasCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var socios = {socios: data};
                $("#allDebts").html(compiledTemplate(socios));
            },
        });
        $("#allDebts").show();
    },

    showFactForm: function(e){
        if($("#facture").length != 0){
            var target = $(e.target).text();
            this.setFlange(target); 
        }
    },

    showSocioFactureTable: function(e){
        var socioId = $(e.target).attr("idsocio");
        var facturasSocio = new FacturasSocio(socioId);
        var deudaSocio = new DeudaSocio(socioId);
        facturasSocio.fetch({
            success: function(data){
                var data = data.toJSON();
                console.log(data);
                deudaSocio.fetch({
                    success: function(data){
                        console.log(data);
                    },
                });

            },
        });
    },

    clearMainNav: function(){
        var targets = $(".mainNav ul li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $(".mainNav ul li:nth-child(3)").addClass("active");
    },

    initialize: function(){
        var self = this;
        this.clearMainNav();
        this.collectionFetched = false;
        this.sociosFiltersCollection = new SociosFilters(); 
        this.sociosFiltersCollection.on("change", this.resettingAutoc, this);
        this.sociosFiltersCollection.fetch({
            success: function(data){
                self.getAutocomplete();
                self.collectionFetched = true;
            },
        });
        
        var template = TEMPLATES.cuotasNav;
        var compiledTemplate = _.template($(template).html());
        $("#mainDisplayer").html(compiledTemplate);
        this.render();
    },

    resettingAutoc: function(){
        console.log("Haaaa!!");
    },

    render: function(){
        var template = TEMPLATES.cuotasForm;
        var compiledTemplate = _.template($(template).html());
        $("#cuotaBody").html(compiledTemplate);
    },

    getAutocomplete: function(){
        var data = this.sociosFiltersCollection.pluck("Filtro");
        $("#socioFinder").autocomplete({
            minLength: 1,
            source: data, 
        });
    },

    refetchCollection: function(){
        var self = this;
        if(this.collectionFetched){ 
            console.log("No need refetching!");
            return;
        };
        console.log("REFETCHING!");
        this.sociosFiltersCollection.fetch({
            success: function(){
                self.getAutocomplete();
                self.collectionFetched = true;
            },
        });
    },

});
