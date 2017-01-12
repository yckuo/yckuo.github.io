$(document).ready(function() {
    $('.img').click(function() {
        $('.modal-content').attr('src', $(this).attr('src'));
        //$('.modal').css('display', 'block');
        $('.modal').fadeIn('slow', function() {
        });
        $('.caption').text($(this).attr('alt'));
    });

    $('.modal').click(function(e) {
        if (e.target != this) {
            return;
        }
        $('.caption').text('');
        //$('.modal').css('display', 'none');
        $('.modal').fadeOut('slow', function() {
        });
    });
});
