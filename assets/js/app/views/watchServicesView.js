var WatchServicesView = Backbone.View.extend({

    el: "#mainDisplayer",

    events: {},

    initialize: function(){
        var self = this;
        this.clearMainNav();
        
        var servicios = new ServiciosCollection();
        var serviciosR = new ServiciosRCollection();

        serviciosR.fetch({
            success: function(data){
                var recurrentServices = data.toJSON();
                servicios.fetch({
                    success: function(data){
                        var normalServices = data.toJSON();
                        var allServices = {recurrentes: recurrentServices, normales: normalServices};
                        self.render(allServices);
                    }
                });
            },
        });
    },

    clearMainNav: function(){
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(4)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
        $(".heading-mosaic").text("Lista de Servicios");
    },

    render: function(allServices){
        var template = TEMPLATES.allServicesTable;
        var compiledTemplate = _.template($(template).html());
        $("#mainDisplayer").html(compiledTemplate(allServices));
    },

    kill: function(){
        this.remove();
        //this.off();
        //this.model.off(null, null, this);

        var div = document.createElement("div");
        div.id = "mainDisplayer";
        $(".rigthPanel").append(div);
    },
});
