var AddSocioView = Backbone.View.extend({

    el:"#APPContainer",

    events:{},

    initialize: function(){
        var lastActive = $(".active", ".mainNav");
        $(lastActive).removeClass("active");
        var addSocio = $("ul", ".mainNav");
        $("li:nth-child(2)", addSocio).addClass("active");
        this.render();
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

});
