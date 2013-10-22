var ModelSocio = Backbone.Model.extend({
    initialize: function(id){
        this.url = "api/models/socio.php?id=" + id;
    },
});
