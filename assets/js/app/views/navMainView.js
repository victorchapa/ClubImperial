var NavMainView = Backbone.View.extend({
    
    el: ".mainNav",

    events:{
        "click ul li"   :   "render", 
    },

    initialize: function(){
        $("#mainDisplayer").html(_.template(TEMPLATES.index));
    },

    render: function(e){

        var target = $(e.target).text();
        var lastActive = $(".active", this.el);
        $(lastActive).removeClass("active");
        var ulTag = $(e.target).parent();
        $(ulTag).addClass("active");
        switch(target){
            case "Inicio" : 
                this.initialize()
                break;
            case "Socios" :
                console.log("Go to Socios View!");
                break;
            case "Cuotas" :
                console.log("Go to Cuotas View!");
                break;
            case "Cuotas" :
                console.log("Go to Cuotas View!");
                break;
            case "Bienvenido" :
                alert("Bienvenido!! :D")
                break;
        }
    },
    
});
