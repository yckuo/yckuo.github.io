$(document).ready(function() {
    $('.img').click(function() {
        $('.modal-content').attr('src', $(this).attr('src'));
        $('.modal').modal('show');
        window.alert('test');
    });
});
