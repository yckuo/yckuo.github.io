$(document).ready(function() {
    $('.img').click(function() {
        $('.modal-content').attr('src', $(this).attr('src')); 
        $('.caption').text($(this).attr('alt'));
        $('.modal').fadeIn(400, function() {
        });
    });

    $('.modal').click(function(e) {
        if (e.target != this) {
            return;
        }
        $('.modal').fadeOut(600, function() {
            $('.caption').text('');
        });
    });
});
