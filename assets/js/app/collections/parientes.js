var CollectionParientes = Backbone.Collection.extend({
    initialize: function(id){
        this.url = "api/collections/parientes.php?id=" + id
    }
});
