var ClubImperial = {
    models: {},
    views: {},
    collections: {},

    initialize: function(){
        var router = new ClubImperial.Router();
        Backbone.history.start({pushState: false});
    }
}

$(function(){
    ClubImperial.initialize();
});
