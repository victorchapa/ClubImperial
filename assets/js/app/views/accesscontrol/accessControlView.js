var AccessControlView = Backbone.View.extend({

    el:"body",

    events: {
        "keydown #socioFinder"      :   "refetchCollection",
        "mouseover #findByName"     :   "blockButton",
        "click #findByName"         :   "getSocio",
        "click #history"            :   "getHistoryAccess",
    },

    initialize: function(){
        var self = this;
        this.collectionFetched = false;
        this.sociosFiltersCollection = new SociosFilters();
        this.sociosFiltersCollection.fetch({
            success: function(data){
                self.getAutocomplete();
                self.collectionFetched = true;
            },
        });
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
            var newData = {value: data.Filtro, label:data.Filtro, id: data.IdSocio};
            dataSourcing.push(newData);
        });
        $("#socioFinder").autocomplete({
            minLength: 1,
            source: dataSourcing,
            select: function(e, data, formatted){
                console.log(data);
                self.getSocioName = data;
                self.disableButton();
            },
        });
    },

    getSocio: function(data){
        var id = this.getSocioName.item.id;
        var template = TEMPLATES.socio;
        var compiledTemplate = _.template($(template).html());
        var findSocioModel = new FindSocioModel(id);
        findSocioModel.fetch({
            success: function(data){
                var data = data.toJSON();
                var socioData = {socioData: data};
                $("#modalDisplayer").html(compiledTemplate(socioData));
                $(".modal-title").text("Ficha del Socio");
                $("#ModalAccess").modal("show");
            },
        });
    },

    disableButton: function(){
        $("#findByName").removeAttr("disabled");
    },

    blockButton: function(){
        var socioName = $("#socioFinder").val();
        if(socioName == ""){
            $("#findByName").attr({disabled: true});
        }
    },

    getHistoryAccess: function(){
        var template = TEMPLATES.historial;
        var compiledTemplate = _.template($(template).html());
        var historyAccessCollection = new HistoryAccessCollection();
        historyAccessCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var historial = {historial: data};
                $("#modalDisplayer").html(compiledTemplate(historial));
                $(".modal-title").text("Historial de Acceso");
                $("#ModalAccess").modal("show");
            },
        });
    },

});
