var MainView = Backbone.View.extend({
    
    el: '#APPContainer',

    events: {
        "click .addSocios"                  :   "renderFormSocio",
    },

    initialize: function(){},

    renderFormSocio: function(e){
        var lastActive = $(".active", ".mainNav");
        $(lastActive).removeClass("active");
        var addSocio = $("ul", ".mainNav");
        $("li:nth-child(2)", addSocio).addClass("active");

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
    },

});  
