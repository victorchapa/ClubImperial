ClubImperial.Router = Backbone.Router.extend({
    routes: {
        ""  : "index",
    },

    initialize: function(){},

    index: function(){
        var accessControlView = new AccessControlView();
    },

});
