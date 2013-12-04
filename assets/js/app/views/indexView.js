var IndexView = Backbone.View.extend({
    
    el: "#mainDisplayer", 

    events:{
        "click ul li"   :   "render", 
    },

    initialize: function(){
        this.render();
        this.clearMainNav();
        this.systemMessage();
    },

    render: function(e){
        $("#mainDisplayer").html(_.template(TEMPLATES.index));
    },

    clearMainNav: function(){
        var targets = $("#miniMenu li");
        _.each(targets, function(target){
            $(target).removeClass("active");
        });
        $("#miniMenu li:nth-child(1)").addClass("active");
    },

    systemMessage: function(){
        $('#content div:first').after('<div class="innerT"><div id="content-notification"></div></div>');
        $('#content-notification').notyfy({
            text: '<h5>¡BIENVENIDO!</h5><p>El sistema esta listo para realizar sus operaciones.</p>',
            type: 'default',
            layout: 'top',
            timeout: 10000,
            closeWith: ['hover'],
        });

        $("#activityR").removeClass("in").addClass("collapse");
    },

    kill: function(){
       this.remove();
       //this.off();
       //this.model.off(null, null, this);

        var div = document.createElement("div");
        div.id = "mainDisplayer";
        $(".rigthPanel").append(div);
    },
    
});
