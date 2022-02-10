$(document).ready(function () {
    // When checkbox is checked display different text
    // Card 1
    // TODO This needs to be cleaned and made DRY
    $('#nl-selector1').click(function() {
        if ($(this).is(':checked')) {
            $(this).siblings('label').html('Retirer');
            $(".card1").addClass("added");
        } else {
            $(this).siblings('label').html('Ajouter');
            $(".card1").removeClass("added");
        }
    });

    $('#nl-selector2').click(function() {
        if ($(this).is(':checked')) {
            $(this).siblings('label').html('Retirer');
            $(".card2").addClass("added");
        } else {
            $(this).siblings('label').html('Ajouter');
            $(".card2").removeClass("added");
        }
    });
});

