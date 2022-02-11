$(document).ready(function () {
    // When checkbox is checked display different text
    // Card 1
    // TODO This needs to be cleaned and made DRY
    $('#nl-selector1').click(function() {
        if ($(this).is(':checked')) {
            $(".mag-card1").addClass("added");
        } else {
            $(".mag-card1").removeClass("added");
        }
    });

    $('#nl-selector2').click(function() {
        if ($(this).is(':checked')) {
            $(".mag-card2").addClass("added");
        } else {
            $(".mag-card2").removeClass("added");
        }
    });

    // OLD
    // $('#nl-selector1').click(function() {
    //     if ($(this).is(':checked')) {
    //         $(".card1").addClass("added");
    //     } else {
    //         $(this).siblings('label').html('Ajouter');
    //         $(".card1").removeClass("added");
    //     }
    // });

    // $('#nl-selector2').click(function() {
    //     if ($(this).is(':checked')) {
    //         $(".card2").addClass("added");
    //     } else {
    //         $(this).siblings('label').html('Ajouter');
    //         $(".card2").removeClass("added");
    //     }
    // });
});

