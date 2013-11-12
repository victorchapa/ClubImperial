ClubImperial.Router = Backbone.Router.extend({
    routes: {
        ""             :   "index",
        "ccuotas"      :   "cuotas",
    },

    initialize: function(){
    },

    index: function(){
        var mainView = new MainView();
        var navMainView = new NavMainView(); 
        var socioView = new SocioView(); 
    },

    cuotas: function(){
        var cuotasView = new CuotasView();
    },

});
