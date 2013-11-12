var CuotasView = Backbone.View.extend({
    
    el: "#mainDisplayer",

    events:{},

    initialize: function(){
        var sociosFilters = new SociosFilters(); 
        sociosFilters.fetch({
            success: function(data){
                var data = data.toJSON();
                console.log(data);
            },
        });
        this.render();
    },

    render: function(){
        var template = TEMPLATES.cuotasForm;
        var compiledTemplate = _.template($(template).html());
        $("#mainDisplayer").html(compiledTemplate);
    },

});
