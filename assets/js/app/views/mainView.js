var MainView = Backbone.View.extend({
    
    el: '#APPContainer',

    events: {
        "click .altaSocioShow"                  :   "renderFormSocio",
        "click .altaSocioHide"                  :   "hideFormSocio",
    },

    initialize: function(){
        $("#mainDisplayer").html(_.template(TEMPLATES.index));
    },

    renderFormSocio: function(e){
        if($("#formSocio").length == 0){
            $("#mainDisplayer").html(_.template(TEMPLATES.formSocio));
            $(".datePicker").datepicker();
        }else{
            $("#formSocio").show();
        }
        $(e.target).addClass("altaSocioHide");
        $(e.target).removeClass("altaSocioShow");
    },

    hideFormSocio: function(e){
        $(e.target).removeClass("altaSocioHide");
        $(e.target).addClass("altaSocioShow");
        $("#formSocio").hide();
    }
});  
