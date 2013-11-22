ClubImperial.Router = Backbone.Router.extend({
    routes: {
        ""                              :   "index",
        "allsocios"                     :   "allSocios",
        "addsocio"                      :   "addSocio",
        "ccuotas"                       :   "cuotas",
        "ccuotas?fid=:id"               :   "generateResivos",
        "ccuotas/factura?id=:id"        :   "getFacture",
    },

    initialize: function(){
    },

    index: function(){
        var mainView = new MainView();
        var navMainView = new NavMainView(); 
    },

    allSocios: function(){
        var socioView = new SocioView(); 
    },

    addSocio: function(){
        var addSocio = new AddSocioView();
    },

    cuotas: function(){
        var cuotasView = new CuotasView();
    },

    getFacture: function(id){
        var cuotasView = new CuotasView({socioId: id});
    },
    
    generateResivos: function(id){
        var cuotasView = new CuotasView({factureId: id});
    },

});
