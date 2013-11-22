var CuotasView = Backbone.View.extend({
    
    el: "#mainDisplayer",

    events:{
        "keydown #socioFinder"      :   "refetchCollection",
        "keydown .findSocioBal"     :   "refetchCollectioninBalance",
        "click .findSocioBal"       :   "clearInput",
        "click .showCuota"          :   "showCuotaForm",
        "click .showDebt"           :   "showDebtForm",
        "click .showFact"           :   "showFactForm",
        "click .watchFact"          :   "showSocioFactureTable",
    },
    
    setFlange: function(target){
        if(target=="Ver"){target = "CARGOS";};
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
        var template = TEMPLATES.balance;
        var compiledTemplate = _.template($(template).html());
        var balanceCollection = new BalanceCollection();
        balanceCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var socios = {socios: data};
                $("#allDebts").html(compiledTemplate(socios));
            },
        });
        this.autocompleteInitialize();
        $("#allDebts").show();
    },

    autocompleteInitialize: function(){
        var self = this;
        this.collectionFetched = false;
        this.sociosFiltersCollection = new SociosFilters();
        this.sociosFiltersCollection.fetch({
            success: function(data){
                self.getAutocompleteBalance();
                self.collectionFetchedII = true;
            },
        });
    },

    refetchCollectioninBalance: function(){
        var self = this;
        if(this.collectionFetched){
            console.log("No need refetching!");
            return;
        }
        this.sociosFiltersCollection.fetch({
            success: function(){
                self.getAutocompleteBalance();
                self.collectionFetchedII = true;
            },
        });
    },

    getAutocompleteBalance: function(){
        var self = this;
        var dataSourcing = [];
        var datas = this.sociosFiltersCollection.toJSON();
        _.each(datas, function(data){
            var newData = {value: data.Filtro, label:data.Filtro, id: data.IdSocio};
            dataSourcing.push(newData);
        });
        $(".findSocioBal").autocomplete({
            minLength: 1,
            source: dataSourcing,
            select: function(e, data, formatted){
                self.goToName(data);
            },
        });
    },

    goToName: function(data){
        window.location.href = "#watchSocio" + data.item.id;
        $(".findSocioBal").blur();
        $("#watchSocio"+data.item.id).css({border:"2px solid red"});
        $("#watchSocio"+data.item.id).on("mouseleave", function(){
            $("#watchSocio"+data.item.id).css({border:"none"});
        });

        window.setTimeout(function(){
            window.history.pushState("", "", "#ccuotas");
        },2000);
    },

    clearInput: function(){
        $(".findSocioBal").val("");
    },

    showFactForm: function(e){
        if($("#factures").length != 0){
            var target = $(e.target).text();
            this.setFlange(target); 
        }
    },

    showSocioFactureTable: function(e, id){
        var self = this;
        if(id != undefined){
            var socioId = id;
        }else{
            var socioId = $(e.target).attr("idsocio");
        }
        var facturasSocio = new FacturasSocio(socioId);
        var deudaSocio = new DeudaSocio(socioId);
        facturasSocio.fetch({
            success: function(data){
                var facturas = data.toJSON();
                deudaSocio.fetch({
                    success: function(data){
                        var data = data.toJSON();
                        deuda = data[0];
                        self.openFactureFlange(e, facturas, deuda);
                    },
                });

            },
        });
    },

    openFactureFlange: function(e, facturas, deuda){
        if($("#factures").length != 1){
            var div = document.createElement("div");
            div.id = "factures";
            $("#cuotaBody").append(div);
        }
        if(e != undefined){
            var target = $(e.target).text();
        }else{
            var target = "CARGOS";
        }
        this.setFlange(target); 
        var template = TEMPLATES.cargos;
        var compiledTemplate = _.template($(template).html());
        var socio = {facturas: facturas, deuda: deuda};
        $("#factures").html(compiledTemplate(socio));

        if (facturas[0] != undefined){
            var socioId = facturas[0].IdSocio;
        }else{
            var spliteId = this.options.socioId;
            var id = spliteId.split("&")[0];
            var socioId = id;
        }

        var flangeCargosView = new FlangeCargosView({idSocio: socioId});
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
        this.flangeCharges = [];
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

    render: function(e){
        var template = TEMPLATES.cuotasForm;
        var compiledTemplate = _.template($(template).html());
        $("#cuotaBody").html(compiledTemplate);
        if(this.options.socioId != undefined){
            var id = this.options.socioId;
            this.showSocioFactureTable(e, id);
        }
        if(this.options.factureId != undefined){
            var factureId = this.options.factureId;
            this.disableFactureButton(factureId);
        }
    },

    disableFactureButton: function(factureId){
        var template = TEMPLATES.facturesWindow;
        var compiledTemplate = _.template($(template).html());
        var facId = {factureId: factureId};
        $(".factures-window").html(compiledTemplate(facId));
        $(".factures-window").show("slow");
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
