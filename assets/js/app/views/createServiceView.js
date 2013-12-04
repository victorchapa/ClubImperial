var CreateServiceView = Backbone.View.extend({

    el: "#mainDisplayer", 

    events: {},

    initialize: function(){
        this.clearMainNav();
        this.render();
    },

    clearMainNav: function(){
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(4)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
        $(".heading-mosaic").text("Crear Servicio");
    },

    render: function(){
        var template = TEMPLATES.formServicios;
        var compiledTemplate = _.template($(template).html());
        $("#mainDisplayer").html(compiledTemplate);
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
