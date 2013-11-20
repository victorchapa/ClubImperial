var FlangeCargosView = Backbone.View.extend({

    el: "#cuotaBody",

    events: {
        "click .filterBy"   : "filterByMY",
    },

    initialize: function(){
        this.socioId = this.options.idSocio;
        console.log(this.socioId);
    },

    filterByMY: function(e){
        var monthSelected = $(".fMonth option:selected").val();
        var yearSelected = $(".fYear").val();
        if((monthSelected != 0) && (yearSelected != "")){
            var newLocation = "#ccuotas/factura?id="+this.socioId+"&mes="+ monthSelected + "&year=" + yearSelected;
            window.location.href = newLocation;
        }else if((monthSelected == 0) && (yearSelected != "")){
            var newLocation = "#ccuotas/factura?id="+this.socioId+"&year="+yearSelected;
            window.location.href = newLocation;
        }else if((monthSelected != 0) && (yearSelected == "")){
            var newLocation = "#ccuotas/factura?id="+this.socioId+"&mes="+monthSelected;
            window.location.href = newLocation;
        }else{
            console.log("Ningun filtro llenado");
        }
    },
});
