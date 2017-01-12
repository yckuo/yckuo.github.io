$(document).ready(function() {
    $('.img').click(function() {
        $('.modal-content').attr('src', $(this).attr('src'));
        $('.modal').fadeIn(400, function() {
        });
        $('.caption').text($(this).attr('alt'));
    });

    $('.modal').click(function(e) {
        if (e.target != this) {
            return;
        }
        $('.caption').text('');
        $('.modal').fadeOut(400, function() {
        });
    });
});
