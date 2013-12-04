var AllBalanceView = Backbone.View.extend({

    el: "#mainDisplayer",

    events: {
        "keydown .findSocioBal"     :   "refetchCollection",
        "click .findSocioBal"       :   "clearInput",
        "click .trSocio"            :   "showWindowAction",
        "click .showFact"           :   "getSocioCargosView",
        "click .showCuota"          :   "showCuotaFlangeView",

    },

    initialize: function(){
        var self = this;
        this.router = new ClubImperial.Router();
        this.clearMainNav();

        this.collectionFetched = false;
        this.sociosFiltersCollection = new SociosFilters();
        this.sociosFiltersCollection.fetch({
            success: function(data){
                self.getAutocomplete();
                self.collectionFetched = true;
            },
        });

        var template = TEMPLATES.cuotasNav;
        var compiledTemplate = _.template($(template).html());
        var target = {target: "balance"};
        $("#mainDisplayer").html(compiledTemplate(target));
        this.render();
    },

    render: function(){
        var self = this;
        if($("#allDebts").length != 1){
            var div = document.createElement("div");
            div.id = "allDebts";
            $("#cuotaBody").append(div);
        }
        var template = TEMPLATES.balance;
        var compiledTemplate = _.template($(template).html());
        var balanceCollection = new BalanceCollection();
        balanceCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var socios = {socios: data};
                $("#allDebts").html(compiledTemplate(socios));
                self.getAutocomplete();
                self.setDataTable(socios);
            },
        });
    },

    setDataTable: function(socios){
        var self = this;
        var dataSourcing = _.map(socios.socios, function(socio){
            var data = [];
            data.push(socio.IdSocio);
            data.push(socio.Nombre);
            data.push(socio.Cargo);
            data.push(socio.Abono);
            return(data);
        });
        $("#balanceTable").dataTable({
            "aaData": dataSourcing,
            "aoColumns": [
                {"sTitle":  "ID Socio", "sClass": "center"},
                {"sTitle":  "Socio"},
                {"sTitle":  "Cargo", "sClass": "center"},
                {"sTitle":  "Deposito", "sClass": "center"},
            ],
            "sPaginationType": "bootstrap",
            "sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
        });
        $("#balanceTable thead tr th:nth-child(1)").css({width: "70px"});
        $("#balanceTable_filter").css({marginBottom: "10px"});
        $("input", "#balanceTable_filter").addClass("table-finder");
        $("select", "#balanceTable_length").addClass("table-pager");

        $("#balanceTable tbody").on("click", function(e){
            self.showWindowAction(e);
        });

        var totales = new TotalesModel();
        totales.fetch({
            success: function(data){
                var data = data.toJSON();
                var template = TEMPLATES.totales;
                var compiledTemplate = _.template($(template).html());
                var values = {cargoTotal: data[0], depositoTotal: data[1]};
                $(".totalTable").html(compiledTemplate(values));

            },
        });

    },

    clearMainNav: function(){
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(3)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
        $(".heading-mosaic").text("Balance Total");
    },

    getSocioCargosView: function(){
        if(ClubImperial.views.socioCargosView != undefined){
            var socioId = ClubImperial.views.socioCargosView.socioId;
            this.kill();
            this.router.navigate("ccuotas/factura?id="+socioId, {trigger: true, replace: true});
        }
    },

    showCuotaFlangeView: function(){
        this.router.navigate("ccuotas", {trigger: true, replace: true});
    },

    refetchCollection: function(){
        var self = this;
        if(this.collectionFetched){
            console.log("No need refetching!");
            return;
        }
        this.sociosFiltersCollection.fetch({
            success: function(){
                self.getAutocomplete();
                self.collectionFetched = true;
            },
        });
    },

    getAutocomplete: function(){
        var self = this;
        var dataSourcing = [];
        var datas = this.sociosFiltersCollection.toJSON();
        _.each(datas, function(data){
            var newData = {value: data.Filtro, label: data.Filtro, id: data.IdSocio};
            dataSourcing.push(newData);
        });
        $(".findSocioBal").autocomplete({
            minLength: 1,
            source: dataSourcing,
            select: function(e, data, formatted){
               self.goToHim(data);
            },
        });
    },

    goToHim: function(data){
        window.location.href = "#watchSocio" + data.item.id;
        $(".findSocioBal").blur();
        $("#watchSocio"+data.item.id).css({border:"2px solid red"});
        $("#watchSocio"+data.item.id).on("mouseleave", function(){
            $("#watchSocio"+data.item.id).css({border:"none"});
        });
        
        window.setTimeout(function(){
            window.history.pushState("","","#ccuotas/balance");
        }, 2000);
    },

    clearInput: function(){
        $(".findSocioBal").val("");
    },

    showWindowAction: function(e){
        var self = this;
        var father =  $(e.target).parent();
        var targetIdSocio = $("td:nth-child(1)", father).text();
        var targetCoordenades = [(e.pageX - 220) + "px", (e.pageY - 200) + "px"];
        $(".spanIdSocio").text(targetIdSocio);
        $(".actionsSocio").css({
            left: targetCoordenades[0],
            top: targetCoordenades[1],
        }).show();

        $(".actionsSocio").on("mouseleave", function(){
            setTimeout(function(){
                $(".actionsSocio").hide();
            }, 500);
        });

        $(".showDetails").on("click", function(){
            var idSocio = $(".spanIdSocio").text();
            self.kill();
            self.router.navigate("ccuotas/factura?id="+idSocio, {trigger: true, replace: true});
        });
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
