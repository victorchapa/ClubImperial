var CuotasView = Backbone.View.extend({
    
    el: "#mainDisplayer",

    events:{
        "keydown #socioFinder"  :   "refetchCollection",
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
        this.render();
    },

    resettingAutoc: function(){
        console.log("Haaaa");
    },

    render: function(){
        var template = TEMPLATES.cuotasForm;
        var compiledTemplate = _.template($(template).html());
        $("#mainDisplayer").html(compiledTemplate);
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
