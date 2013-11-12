var CuotasView = Backbone.View.extend({
    
    el: "#mainDisplayer",

    events:{},

    clearMainNav: function(){
        var targets = $(".mainNav ul li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $(".mainNav ul li:nth-child(3)").addClass("active");
    },

    initialize: function(){
        this.clearMainNav();
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
