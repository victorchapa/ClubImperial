$(document).ready(function(){
    console.log("CACA!");
    /* Notification */
    $('#content div:first').after('<div class="innerT"><div id="content-notification"></div></div>');
    $('#content-notification').notyfy({
        text: '<h5>¡BIENVENIDO!</h5><p>El sistema esta listo para realizar sus operaciones.</p>',
        type: 'default',
        layout: 'top',
        timeout: 10000,
        closeWith: ['hover'],
    });

    $("#activityR").removeClass("in").addClass("collapse");


});
