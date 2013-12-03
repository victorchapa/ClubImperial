var CuotasView = Backbone.View.extend({
    
    el: "#mainDisplayer",

    events:{
        "keydown #socioFinder"      :   "refetchCollection",
        "click .showDebt"           :   "showBalanceView",
        "click .showFact"           :   "showSocioCargosView",
        "change .getServices"       :   "getServicePrice",
    },

    initialize: function(){
        var self = this;
        this.router = new ClubImperial.Router();

        this.clearMainNav();
        this.collectionFetched = false;

        var template = TEMPLATES.cuotasNav;
        var compiledTemplate = _.template($(template).html());
        var target = {target: "cuotas"};
        $("#mainDisplayer").html(compiledTemplate(target));
        this.render();
    },

    render: function(e){
        var self = this;
        var template = TEMPLATES.cuotasForm;
        var compiledTemplate = _.template($(template).html());

        var serviciosCollection = new ServiciosCollection();
        serviciosCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var services = {services: data};
                $("#cuotaBody").html(compiledTemplate(services));

                this.sociosFiltersCollection = new SociosFilters(); 
                this.sociosFiltersCollection.on("change", this.resettingAutoc, this);
                this.sociosFiltersCollection.fetch({
                    success: function(data){
                        var data = this.sociosFiltersCollection.pluck("Filtro");
                        self.getAutocomplete(data);
                        self.collectionFetched = true;
                    },
                });
            },
        });

        if(this.options.factureId != undefined){
            this.factureId = this.options.factureId;
            var template = TEMPLATES.facturesWindow;
            var compiledTemplate = _.template($(template).html());
            var id = {factureId: this.factureId};
            $(".factures-window").html(compiledTemplate(id));
            $(".factures-window").show("slow");
        }
    },

    clearMainNav: function(){
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(3)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
        $(".heading-mosaic").text("Generar Cuota");
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
                var data = this.sociosFiltersCollection.pluck("Filtro");
                self.getAutocomplete(data);
                self.collectionFetched = true;
            },
        });
    },

    getAutocomplete: function(data){
        $("#socioFinder").autocomplete({
            minLength: 1,
            source: data, 
        });
    },


    resettingAutoc: function(){
        console.log("RESETTINGAUTOCOMPLETE!");
    },

    showBalanceView: function(){
        this.kill();
        this.router.navigate("ccuotas/balance",{trigger: true, replace: true});
    },

    showSocioCargosView: function(){
        if(ClubImperial.views.socioCargosView != undefined){
            var socioId = ClubImperial.views.socioCargosView.socioId;
            this.kill();
            this.router.navigate("ccuotas/factura?id="+socioId, {trigger: true, replace: true});
        }
    },

    disableFactureButton: function(factureId){
        var template = TEMPLATES.facturesWindow;
        var compiledTemplate = _.template($(template).html());
        var facId = {factureId: factureId};
        $(".factures-window").html(compiledTemplate(facId));
        $(".factures-window").show("slow");
    },

    getServicePrice: function(){
        var cargo = $(".getServices option:selected").attr("cargo");
        $("input[name='Total']").val(cargo);
    },

    kill: function() {
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
