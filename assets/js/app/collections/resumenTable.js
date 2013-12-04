var ResumenTableCollection = Backbone.Collection.extend({
    
    initialize: function(id){
        this.url = "api/collections/resumen.php?id=" + id;
    },

});
