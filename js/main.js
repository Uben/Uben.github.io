
// Supposed to fade to white after a link has been clicked and delay the connection for 200ms
// $('a').on('click', function(){
	// $('nav').fadeOut(200);
	// $('body').fadeOut(200);
	// Delay setting the location for one second
 	// setTimeout(function() {window.location = href}, 500);

    // $('body').fadeOut(500, function() {
    //     window.location.href = self.attr('href'); // go to href after the slide animation completes
    // });
    // return false; // And also make sure you return false from your click handler.
// });

// This is for the loading screen animation
$('#load').delay(1000).queue(function (next) { 
    $(this).fadeOut(1000); 
    next();
});