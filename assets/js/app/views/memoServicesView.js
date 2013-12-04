var MemoServicesView = Backbone.View.extend({
    
    el: ".memoFieldServices",

    events: {
        "click .nombreService"     : "parientSelection",
    },

    initialize: function(){
    },

    parientSelection: function(e){
        $(".nombreService").removeClass("selected");
        $(e.target).addClass("selected");
        $(".btnDelSR").removeAttr("disabled");
    },
});
