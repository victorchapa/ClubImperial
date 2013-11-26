var AllBalanceView = Backbone.View.extend({

    el: "#mainDisplayer",

    events: {
        "click .showCuota"          :   "getCuotasView",
        "keydown .findSocioBal"     :   "refetchCollection",
        "click .trSocio"            :   "showWindowAction",
        "click .showFact"           :   "getSocioCargosView",
        "click .showCuota"          :   "showCuotaFlangeView",

    },

    initialize: function(){
        this.router = new ClubImperial.Router();
        var template = TEMPLATES.cuotasNav;
        var compiledTemplate = _.template($(template).html());
        var target = {target: "balance"};
        $("#mainDisplayer").html(compiledTemplate(target));
        this.render();
    },

    render: function(){
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

            },
        });
    },

    getCuotasView: function(){
        this.router.navigate("ccuotas", {trigger: true, replace: true});
    },

    getSocioCargosView: function(){
        if(ClubImperial.views.socioCargosView != undefined){
            var socioId = ClubImperial.views.socioCargosView.socioId;
            console.log(socioId);
            this.kill();
            this.router.navigate("ccuotas/factura?id="+socioId, {trigger: true, replace: true});
        }
    },

    showCuotaFlangeView: function(){
        console.log("GO TO PARTY!");
    },

    refetchCollection: function(){
        console.log("Writting...");
    },

    showWindowAction: function(e){
        var self = this;
        var targetIdSocio =  $(e.target).parent().attr("idsocio");
        var targetCoordenades = [(e.pageX - 215) + "px", (e.pageY - 155) + "px"];
        $(".spanIdSocio").text(targetIdSocio);
        $(".actionsSocio").css({
            left: targetCoordenades[0],
            top: targetCoordenades[1],
        }).show();

        $(".actionsSocio").on("mouseleave", function(){
            setTimeout(function(){
                $(".actionsSocio").hide();
            }, 1500);
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
