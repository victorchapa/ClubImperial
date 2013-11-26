ClubImperial.Router = Backbone.Router.extend({

    routes: {
        ""                              :   "index",
        "allsocios"                     :   "allSocios",
        "addsocio"                      :   "addSocio",
        "ccuotas"                       :   "cuotas",
        "ccuotas/balance"               :   "getAllBalance",
        "ccuotas/factura?id=:id"        :   "getCargos",
        "ccuotas?fid=:id"               :   "generateResivos",
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

    getCargos: function(id){
        ClubImperial.views.socioCargosView = new SocioCargosView({socioId: id});
    },

    getAllBalance: function(){
        ClubImperial.views.allBalanceView = new AllBalanceView();
    },

    getFacture: function(id){
        var cuotasView = new CuotasView({socioId: id});
    },
    
    generateResivos: function(id){
        var cuotasView = new CuotasView({factureId: id});
    },

});
