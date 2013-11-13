var FacturasSocio = Backbone.Collection.extend({
    initialize: function(id){
        this.url = "api/collections/facturas.php?id=" + id;
    },
});
