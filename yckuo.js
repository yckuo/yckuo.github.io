$(document).ready(function() {
    $('.img').click(function() {
        $('.modal-content').attr('src', $(this).attr('src'));
        $('.modal').css('display', 'block');
        $('.caption').text($(this).attr('alt'));
        /*$('.modal').modal('show');*/
        alert('test');
    });
});
