var CreateServiceView = Backbone.View.extend({

    el: "#mainDisplayer", 

    events: {},

    initialize: function(){
        console.log("Crear Servicio");
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
