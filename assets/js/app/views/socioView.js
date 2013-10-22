var SocioView = Backbone.View.extend({

    el: "#mainDisplayer", 

    events: {
        "click .idSocio"                    : "renderOptions",
        "click .showS"                      : "showSociosTable",
        "click .showE"                      : "showEditarSocio",
    },

    initialize: function(){},

    renderOptions: function(e){
        var self = this;
        var clickOn = $(e.target).attr("id");
        var target = $(e.target)[0];
        var father = $(target).parent();
        var id = $("span", father).text();

        $.ajax({
            url:"/clubimperial/api/verSocio.php?id=" + id,
            type: "GET",
        }).done(function(data){
            switch (clickOn){
                case "sSocio":
                    self.showSocio(data);
                    break;
                case "eSocio":
                    self.editarSocio(data);
            }
        });
    },

    showSocio: function(data){
        var dataHTML = $.parseHTML(data);
        $("#modalDisplayer").html(dataHTML);
        $("#Modal").modal("show");
    },
    
    hideSociosTable: function(){
        $("table", ".socioBody").hide();                
    },

    showSociosTable: function(e){
        $(".navSocio li:nth-child(1)").addClass("active");
        $(".navSocio li:nth-child(2)").removeClass("active");
        $("table", ".socioBody").show();                
    },
    
    editSocioInitializer: function(){
        $(".navSocio li:nth-child(1)").removeClass("active");
        $(".navSocio li:nth-child(2)").addClass("active");
        this.hideSociosTable();
    },

    editarSocio: function(data){
        this.editSocioInitializer();
        console.log("EDIT!"); 
    },

    showEditarSocio: function(data){
        this.editSocioInitializer();

        var editSocio = $("#editSocio");
        if(editSocio.length != 1){
            console.log("Elija un Socio para editar.");    
        }
    
    },

});
