
// This is for the loading screen animation
$('#load').delay(1000).queue(function (next) { 
    $(this).fadeOut(1000); 
    next();
});