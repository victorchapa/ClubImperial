ClubImperial.Router = Backbone.Router.extend({
    routes: {
        ""  :   "index",
    },

    initialize: function(){
    },

    index: function(){
        var mainView = new MainView();
        var navMainView = new NavMainView(); 
    },

});
