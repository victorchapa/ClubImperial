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
                    self.editarSocio(id);
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
        $("#editSocio").hide();                
    },
    
    editSocioInitializer: function(){
        $(".navSocio li:nth-child(1)").removeClass("active");
        $(".navSocio li:nth-child(2)").addClass("active");
        this.hideSociosTable();
    },

    editarSocio: function(id){
        this.editSocioInitializer();

        var div = document.createElement("div");
        div.id = "editSocio";
        $(".socioBody").append(div);

        var template = TEMPLATES.editSocio;
        var compiledTemplate = _.template($(template).html());
        var modelSocio = new ModelSocio(id);
        modelSocio.fetch({
            success: function(data){
                var data = data.toJSON()[0];
                var afiliaciones = data.Afiliacion.split(", ");
                var objAfi = {Golf: null, Futbol: null, Tenis: null, Piscina: null, Gym: null, SPA: null};
                _.each(afiliaciones, function(afiliacion){
                    objAfi[afiliacion] = true;
                }); 
                data.Afiliacion = objAfi;
                var socio = {socio: data};
                $("#editSocio").html(compiledTemplate(socio));
                $(".datePicker").datepicker();
                $(".btnUpLoad").on("click", function(){
                    $("#upLoad").click();
                    setInterval(function(){
                        var name = $('#upLoad').val();
                        var fileName = name.split("\\");
                        $('#fileName').text(fileName[2]);
                    },1);
                    return false;
                });

                function changeImage(e){
                    var selectedFile = e.target.files[0];
                    console.log(selectedFile);
                    var reader = new FileReader();

                    reader.onload = function(e){
                        var span = document.createElement('span');
                        span.innerHTML = ["<img src='"+e.target.result+"'>"].join('');
                        $(".photoReload").addClass("display-none");
                        document.getElementsByClassName("fotoSocioEdit")[0].insertBefore(span, null);
                    }

                    reader.readAsDataURL(selectedFile);
                }
                document.getElementById("upLoad").addEventListener("change", changeImage, false);
            },
        });
        $("#editSocio").show();
        //var alertSocio = document.getElementsByClassName("alertSocio");
        //alertSocio[0].remove();
    },

    showEditarSocio: function(data){
        this.editSocioInitializer();

        var editSocio = $("#editSocio");
        if(editSocio.length != 1){
            if($(".alertSocio").length != 0){
                var alertSocio = document.getElementsByClassName("alertSocio");
                alertSocio[0].remove();
            }else{
                var div = document.createElement("div");
                div.className = div.className + "alertSocio";
                $(".socioBody").append(div);
            }
        }else{
            $("#editSocio").show();
        }
    
    },

});
