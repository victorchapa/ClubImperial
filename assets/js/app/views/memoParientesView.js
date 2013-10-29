var MemoParientesView = Backbone.View.extend({
    
    el: ".memoField",

    events: {
        "click .nombrePariente"     : "parientSelection",
    },

    initialize: function(){
    },

    parientSelection: function(e){
        $(".nombrePariente").removeClass("selected");
        $(e.target).addClass("selected");
        $(".btnDelPari").removeAttr("disabled");
        $(".btnEditPari").removeAttr("disabled");
    },
});
