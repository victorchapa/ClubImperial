var AccessControlView = Backbone.View.extend({

    el:"body",

    events: {
        "keydown #socioFinder"  : "refetchCollection",
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
        var data = this.sociosFiltersCollection.pluck("Filtro");
        $("#socioFinder").autocomplete({
            minLength: 1,
            source: data,
        });
    },

});
