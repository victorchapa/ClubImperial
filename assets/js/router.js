ClubImperial.Router = Backbone.Router.extend({

    routes: {
        ""                              :   "index",
        "allsocios"                     :   "allSocios",
        "addsocio"                      :   "addSocio",
        "ccuotas"                       :   "cuotas",
        "ccuotas/balance"               :   "getAllBalance",
        "ccuotas/factura?id=:id"        :   "getCargos",
        "ccuotas?fid=:id"               :   "generateResivos",
        "servicios/create"              :   "createServices",
        "servicios/watch"               :   "watchServices",
    },

    initialize: function(){
    },

    index: function(){
        ClubImperial.views.indexView = new IndexView(); 
    },

    allSocios: function(){
        this.killZombiesView();
        ClubImperial.views.socioView = new SocioView(); 
    },

    addSocio: function(){
        this.killZombiesView();
        ClubImperial.views.addSocio = new AddSocioView();
    },

    cuotas: function(){
        this.killZombiesView();
        ClubImperial.views.cuotasView = new CuotasView();
    },

    getCargos: function(id){
        this.killZombiesView();
        ClubImperial.views.socioCargosView = new SocioCargosView({socioId: id});
    },

    getAllBalance: function(){
        this.killZombiesView();
        ClubImperial.views.allBalanceView = new AllBalanceView();
    },

    generateResivos: function(id){
        this.killZombiesView();
        ClubImperial.views.cuotasView = new CuotasView({factureId: id});
    },

    createServices: function(){
        this.killZombiesView();
        ClubImperial.views.createServiceView = new CreateServiceView();
    },

    watchServices: function(){
        this.killZombiesView();
        ClubImperial.views.watchServicesView = new WatchServicesView();
    },

    killZombiesView: function(){
        var views = ClubImperial.views;
        _.each(views, function(view){
            view.kill();
        });
    },

});
