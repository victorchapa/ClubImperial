ClubImperial.Router = Backbone.Router.extend({
    routes: {
        ""                              :   "index",
        "allsocios"                     :   "allSocios",
        "ccuotas"                       :   "cuotas",
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

    cuotas: function(){
        var cuotasView = new CuotasView();
    },

    getFacture: function(id){
        var cuotasView = new CuotasView({socioId: id});
    },

});
