var AddSocioView = Backbone.View.extend({

    el:"#mainDisplayer",

    events:{},

    initialize: function(){
        this.render();
        this.clearMainNav();
    },

    render: function(){

        if($("#formSocio").length == 0){
            $("#mainDisplayer").html(_.template(TEMPLATES.formSocio));
            $(".datePicker").datepicker({
                changeMonth: true,
                changeYear: true,
                changeDay: true
            });
            $(".btnUpLoad").on("click", function(){
                $("#upLoad").click();
                setInterval(function(){
                    var name = $('#upLoad').val();
                    var fileName = name.split("\\");
                    $('#fileName').text(fileName[2]);
                },1);
                return false;
            });
        }
    },

    clearMainNav: function(){
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(2)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
        $(".heading-mosaic").text("Agregar Socio");
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
