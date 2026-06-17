$(document).ready(function() {
    
    $('img').mouseenter(function() {
        console.log("Mouse entered the image!");
        $(this).css('opacity', '0.5');
    });


    $('img').mouseleave(function() {
        console.log("Mouse left the image!");
        $(this).css('opacity', '1.0');
    });
});