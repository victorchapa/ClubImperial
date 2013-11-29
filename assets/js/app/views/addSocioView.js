var AddSocioView = Backbone.View.extend({

    el:"#APPContainer",

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
        $("#bigMenu li:nth-child(1)").removeClass("active");
        $("#miniMenu li:nth-child(3)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
    },

});
