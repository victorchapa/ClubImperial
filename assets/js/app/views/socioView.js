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
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(2)").addClass("active");
        $("#activityR").removeClass("in").addClass("collapse");
        $(".heading-mosaic").text("TODOS los Socios");
    },

    initialize: function(){
        this.clearMainNav();
        this.render();
    },

    render: function(){
        var self = this;
        $("#mainDisplayer").html(TEMPLATES.socioNav);

        var template = TEMPLATES.allSocios;
        var compiledTemplate = _.template($(template).html());
        var collectionSocios = new CollectionSocios(); 
        collectionSocios.fetch({
            success: function(){
                var data = collectionSocios.toJSON();
                var socios = {socios: data};
                $(".socioBody").html(compiledTemplate(socios));
                self.setDataTable(socios);
            }
        });
    },

    setDataTable: function(socios){
        var self = this;
        var dataSourcing = _.map(socios.socios, function(socio){
            var data = [];
            data.push(socio.IdSocio);
            data.push(socio.Nombre);
            data.push(socio.ApellidoP);
            data.push(socio.ApellidoM);
            data.push(socio.FNacimiento);
            data.push(socio.Domicilio);
            data.push(socio.Manzana);
            data.push(socio.Lote);
            data.push(socio.Coto);
            data.push(socio.Telefono);
            data.push(socio.Celular);
            data.push(socio.Correo);
            data.push(socio.Membresia);
            data.push(socio.Sangre);
            data.push(socio.FAlta);
            data.push(socio.Afiliacion);
            return(data);
        });
        $("#sociosTable").dataTable({
            "aaData": dataSourcing,
            "aoColumns": [
                {"sTitle":  "ID Socio", "sClass": "center"},
                {"sTitle":  "Nombre"},
                {"sTitle":  "Apellido Paterno"},
                {"sTitle":  "Apellido Materno"},
                {"sTitle":  "Fecha de Nacimiento", "sClass": "center"},
                {"sTitle":  "Domicilio"},
                {"sTitle":  "Manzana"},
                {"sTitle":  "Coto", "sClass": "center"},
                {"sTitle":  "Telefono", "sClass": "center"},
                {"sTitle":  "Celular", "sClass": "center"},
                {"sTitle":  "Email"},
                {"sTitle":  "Membresia"},
                {"sTitle":  "Tipo de Membresia"},
                {"sTitle":  "Tipo de Sangre", "sClass": "center"},
                {"sTitle":  "Fecha de Alta", "sClass": "center"},
                {"sTitle":  "Afiliacion"},
            ],
            "sPaginationType": "bootstrap",
            "sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
        });
        $("#sociosTable thead tr th:nth-child(1)").css({width: "70px"});
        $("#sociosTable_filter").css({marginBottom: "10px"});
        $("input", "#sociosTable_filter").addClass("table-finder");
        $("select", "#sociosTable_length").addClass("table-pager");

        $("#sociosTable tbody").on("click", function(e){
            self.showWindowAction(e);
        });
    },

    showWindowAction: function(e){
        var targetIdSocio =  $(e.target).parent().attr("idsocio");
        var targetCoordenades = [(e.pageX - 215) + "px", (e.pageY - 55) + "px"];
        var self = this;
        var father =  $(e.target).parent();
        var targetIdSocio = $("td:nth-child(1)", father).text();
        var targetCoordenades = [(e.pageX - 230) + "px", (e.pageY - 200) + "px"];
        $(".spanIdSocio").text(targetIdSocio);
        $(".actionsSocio").css({
            left: targetCoordenades[0],
            top: targetCoordenades[1],
        }).show();

        $(".actionsSocio").on("mouseleave", function(){
            setTimeout(function(){
                $(".actionsSocio").hide();
            }, 500);
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
        $(".tableContainer").hide();                
    },

    showSociosTable: function(e){
        $("ul.navSocio li a").css({display:"none"});
        $(".navSocio li:nth-child(1)").addClass("active");
        $(".navSocio li:nth-child(2)").removeClass("active");
        $(".tableContainer").show();                
        $("#editSocio").hide();                
    },
    
    editSocioInitializer: function(){
        $("ul.navSocio li a").css({display:"block"});
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
        var idSocio = $("input[type='hidden']", ".EditSocioForm").val(); 
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

        $("#notyfy_container_top").notyfy({
            text: "<h3>¿Esta seguro de eliminar al pariente?</h3>",
            type: "confirm",
            dismissQueue: true,
            layout: "top",
            buttons: [{
                        addClass: "btn btn-success btn-small",
                        text: "<i></i> Sí",
                        onClick: function($notyfy){
                            $notyfy.close();
                            $.ajax({
                                method: "POST",
                                url: "api/RemovePariente.php?id=" + id,
                            }).done(function(){
                                $(parient).remove();
                            }); 
                            notyfy({
                                force: true,
                                text: "<h4 style='color: white'>El pariente ha sido eliminado Exitosamente</h4>",
                                type: "success",
                                layout: "top",
                            });
                        },
                    },
                    {
                        addClass: "btn btn-danger btn-small",
                        text: "Cancelar",
                        onClick: function($notyfy){
                            $notyfy.close();
                            notyfy({
                                force: true,
                                text: "<h4 style='color: white'>Se ha cancelado la eliminación del Pariente</h4>",
                                type: "error",
                                layout: "top",
                            })
                        },
                    }]
        });

        //jConfirm('¿Esta seguro de borrar el pariente?', 'Confirmación', function(r) {
            //if(r == true){
                //$.ajax({
                    //method: "POST",
                    //url: "api/RemovePariente.php?id=" + id,
                //}).done(function(){
                    //$(parient).remove();
                //});    
            //}
        //});
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
