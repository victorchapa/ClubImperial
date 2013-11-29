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
        ClubImperial.views.indexView = new IndexView(); 
    },

    allSocios: function(){
        var socioView = new SocioView(); 
    },

    addSocio: function(){
        var addSocio = new AddSocioView();
    },

    cuotas: function(){
        ClubImperial.views.cuotasView = new CuotasView();
    },

    getCargos: function(id){
        ClubImperial.views.socioCargosView = new SocioCargosView({socioId: id});
    },

    getAllBalance: function(){
        ClubImperial.views.allBalanceView = new AllBalanceView();
    },

    generateResivos: function(id){
        ClubImperial.views.cuotasView = new CuotasView({factureId: id});
    },

});
