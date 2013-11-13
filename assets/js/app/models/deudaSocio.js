var DeudaSocio = Backbone.Model.extend({
    initialize: function(id){
        this.url = "api/collections/fdeudas.php?id=" + id;
    },
});
