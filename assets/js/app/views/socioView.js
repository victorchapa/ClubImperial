var SocioView = Backbone.View.extend({

    el: "#mainDisplayer", 

    events: {
        "click .idSocio" : "renderSocio",
    },

    initialize: function(){},

    renderSocio: function(e){
        var target = $(e.target)[0];
        var father = $(target).parent();
        var id = $("span", father).text();
        $.ajax({
            url:"/clubimperial/verSocio.php?id=" + id,
            type: "GET",
        }).done(function(data){
            var dataHTML = $.parseHTML(data);
            $("#modalDisplayer").html(dataHTML);
            $("#Modal").modal("show");
        });
    },

});
