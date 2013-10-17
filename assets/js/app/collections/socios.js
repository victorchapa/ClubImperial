var CollectionSocios = Backbone.Collection.extend({
    url: "api/collections/socios.php",
    initialize: function(){
        console.log("Collection Socios working!");
    }
});
