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
                this.renderSociosTemplate(e)
                break;
            case "Bienvenido" :
                alert("Bienvenido!! :D")
                break;
        }
    },

    renderSociosTemplate: function(e){
        if($("#formSocio").length == 0){
            $("#mainDisplayer").html(_.template(TEMPLATES.formSocio));
            $(".datePicker").datepicker();
            $(".btnUpLoad").on("click", function(){
                $("#upLoad").click();
                setInterval(function(){
                    $('#fileName').html($('#upLoad').val());
                },1);
                return false;
            });
        }
    }
});
