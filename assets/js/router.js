ClubImperial.Router = Backbone.Router.extend({
    routes: {
        ""                      :   "index",
        "allsocios"             :   "allSocios",
        "ccuotas"               :   "cuotas",
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

});
