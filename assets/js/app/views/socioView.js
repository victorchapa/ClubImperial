var SocioView = Backbone.View.extend({

    el: "#mainDisplayer", 

    events: {
        "click .idSocio"                    : "renderOptions",
        "click .showS"                      : "showSociosTable",
        "click .showE"                      : "showEditarSocio",
        "click .trSocio"                    : "showWindowAction",
        "click .btnAddPari"                 : "showFormAddPariente",
        "click .btnDelPari"                 : "delPariente",
        "click .btnEditPari"                 : "editPariente",
    },

    clearMainNav: function(){
        var targets = $(".mainNav ul li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $(".mainNav ul li:nth-child(2)").addClass("active");
    },

    initialize: function(){
        this.clearMainNav();
        this.render();
    },

    render: function(){
        $("#mainDisplayer").html(TEMPLATES.socioNav);

        var template = TEMPLATES.allSocios;
        var compiledTemplate = _.template($(template).html());
        var collectionSocios = new CollectionSocios(); 
        collectionSocios.fetch({
            success: function(){
                var data = collectionSocios.toJSON();
                var socios = {socios: data};
                $(".socioBody").html(compiledTemplate(socios));
            }
        });
    },

    showWindowAction: function(e){
        test = $(e.target);
        var targetIdSocio =  $(e.target).parent().attr("idsocio");
        var targetCoordenades = [(e.pageX - 215) + "px", (e.pageY - 155) + "px"];
        $(".spanIdSocio").text(targetIdSocio);
        $(".actionsSocio").css({
            left: targetCoordenades[0],
            top: targetCoordenades[1],
        }).show();

        $(".actionsSocio").on("mouseleave", function(){
            setTimeout(function(){
                $(".actionsSocio").hide();
            }, 1500);
        });
        
    },

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
                    $(".actionsSocio").hide();
                    break;
                case "eSocio":
                    self.editarSocio(id);
                    $(".actionsSocio").hide();
                    break;
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

                function changeImage(e){
                    var selectedFile = e.target.files[0];
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

                var memoParientsView = new MemoParientesView(); 
                var id = data.IdSocio;
                var collectionParientes = new CollectionParientes(id);
                collectionParientes.fetch({
                    success: function(data){
                        var data = data.toJSON();
                        _.each(data, function(pariente){
                            var name = pariente.Nombre + " " + pariente.ApellidoP + " " + pariente.ApellidoM + " => " + pariente.Parentesco +".";
                            $("<p>", {
                                class: "nombrePariente",
                                text: name,
                                idPariente: pariente.IdPariente,
                                idSocio: pariente.IdSocio,
                            }).appendTo(".memoField");
                        }); 
                    }
                });
            },
        });
        $("#editSocio").show();
    },

    showEditarSocio: function(data){

        var editSocio = $("#editSocio");
        if(editSocio.length != 1){
            //console.log("No se puede hasta escojer Socio");
        }else{
            this.editSocioInitializer();
            $("#editSocio").show();
        }
    
    },

    showFormAddPariente: function(){
        var template = TEMPLATES.formParientes;
        var compiledTemplate = _.template($(template).html());
        var idSocio = $("input[type='hidden']", "#editSocioForm").val(); 
        var idPariente = {idPariente: idSocio};
        $("#modalDisplayerParientes").html(compiledTemplate(idPariente));
        $(".datePicker").datepicker({
            changeMonth: true,
            changeYear: true,
            changeDay: true
        });
        $(".btnUpLoadPariente").on("click", function(){
            $("#upLoadPariente").click();
            setInterval(function(){
                var name = $('#upLoadPariente').val();
                var fileName = name.split("\\");
                $('#fileNamePariente').text(fileName[2]);
            },1);
            return false;
        });
        $("#modalParientes").modal({
            backdrop: 'static',
            keyboard: false
        });
        $("#modalParientes").modal("show");
    },

    delPariente: function(){
        var parient = $(".selected", ".memoField");
        var id = $(parient).attr("idsocio");

        jConfirm('¿Esta seguro de borrar el pariente?', 'Confirmación', function(r) {
            if(r == true){
                $.ajax({
                    method: "POST",
                    url: "api/RemovePariente.php?id=" + id,
                }).done(function(){
                    $(parient).remove();
                }); 
            }
        });
    },

    editPariente: function(){
        var parient = $(".selected", ".memoField");
        var id = $(parient).attr("idsocio");

        var template = TEMPLATES.editPariente;
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
                $("#modalDisplayerParientes").html(compiledTemplate(socio));
                $(".datePicker").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    changeDay: true
                });
                $(".btnUpLoadPari").on("click", function(){
                    $("#upLoadPari").click();
                    setInterval(function(){
                        var name = $('#upLoadPari').val();
                        var fileName = name.split("\\");
                        $('#fileNamePari').text(fileName[2]);
                    },1);
                    return false;
                });

                function changeImage(e){
                    var selectedFile = e.target.files[0];
                    var reader = new FileReader();

                    reader.onload = function(e){
                        var span = document.createElement('span');
                        span.innerHTML = ["<img src='"+e.target.result+"'>"].join('');
                        $(".photoReloadII").addClass("display-none");
                        console.log(span);
                        document.getElementsByClassName("fotoParienteEdit")[0].insertBefore(span, null);
                    }

                    reader.readAsDataURL(selectedFile);
                }
                document.getElementById("upLoadPari").addEventListener("change", changeImage, false);
                $("#modalParientes").modal("show");

            }
        });


    }

});
