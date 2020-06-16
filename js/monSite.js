$(function () {
    let nom = $('#nom'), velos = $('#velos'), form = $("#form");

    $(form).on('submit', function () {
        $('.alert').remove();

        if ($(nom).val() == '') {
            $(form).before('<div class="alert alert-danger">Indiquer votre nom</div>');
            return false;
        }

        if ($(velos).val() == 0) {
            $(form).before('<div class="alert alert-danger">Indiquer votre vélo</div>');
            return false;
        }


        if ($('input:radio').length == 0) {
            $(form).before('<div class="alert alert-danger">Indiquer ce que vous êtes</div>');
            return false;
        }


    });


});
