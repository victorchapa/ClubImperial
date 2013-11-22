var MainView = Backbone.View.extend({
    
    el: '#APPContainer',

    events: {
        "click .addSocios"                  :   "renderFormSocio",
        "click .addCuota"                   :   "renderFormCuotas",
    },
    
    
    initialize: function(){
        this.router = new ClubImperial.Router();
    },

    renderFormSocio: function(e){
        this.router.navigate("#addsocio", {trigger: true, replace: true});
    },

    renderFormCuotas: function(){
        this.router.navigate("#ccuotas", {trigger: true, replace: true});
    },

});  
