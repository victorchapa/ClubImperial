var AccessControlView = Backbone.View.extend({

    el:"body",

    events: {
        "keydown #socioFinder"  :   "refetchCollection",
        "click #findByName"     :   "getSocio",
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
                self.getSocioName = data;
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
                $("#ModalAccess").modal("show");
            },
        });
    },

});
