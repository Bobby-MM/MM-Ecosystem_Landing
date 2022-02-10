$(document).ready(function () {
    // When checkbox is checked display different text
    $('#nl-selector').click(function() {
        if ($(this).is(':checked')) {
            $(this).siblings('label').html('Retirer');
            $(".card").addClass("added");
        } else {
            $(this).siblings('label').html('Ajouter');
            $(".card").removeClass("added");
        }
    });
});