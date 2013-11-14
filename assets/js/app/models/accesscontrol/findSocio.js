var FindSocioModel = Backbone.Model.extend({

    initialize: function(id){
        this.url = "api/FindSocio.php?id=" + id;
    },
});
