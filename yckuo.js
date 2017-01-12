$(document).ready(function() {
    $('.img').click(function() {
        $('figure img').attr('src', $(this).attr('src')); 
        $('figcaption').text($(this).attr('alt'));
        $('.modal').fadeIn(400, function() {
        });
    });

    $('.modal').click(function(e) {
        if (e.target != this) {
            return;
        }
        $('.modal').fadeOut(800, function() {
            $('figcaption').text('');
        });
    });
});
