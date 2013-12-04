var UserServices = Backbone.Collection.extend({
    initialize: function(id){
        this.url = "api/collections/userRecurrentes.php?id=" + id;
    },
});
