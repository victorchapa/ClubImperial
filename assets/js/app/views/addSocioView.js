var AddSocioView = Backbone.View.extend({

    el:"#APPContainer",

    events:{},

    initialize: function(){
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
