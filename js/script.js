$(document).ready(function () {
    // When checkbox is checked display different text
    // Card 1
    // TODO This needs to be cleaned and made DRY
    $('#mag-selector1').click(function() {
        if ($(this).is(':checked')) {
            $(".mag-card1").addClass("added");
        } else {
            $(".mag-card1").removeClass("added");
        }
    });

    // Card 2
    $('#mag-selector2').click(function() {
        if ($(this).is(':checked')) {
            $(".mag-card2").addClass("added");
        } else {
            $(".mag-card2").removeClass("added");
        }
    });

    // For Newsletters
        // Newsletter 1
    // TODO This needs to be cleaned and made DRY
    $('#nl-selector1').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card1").addClass("added");
        } else {
            $(".nl-card1").removeClass("added");
        }
    });

    // Newsletter 2
    $('#nl-selector2').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card2").addClass("added");
        } else {
            $(".nl-card2").removeClass("added");
        }
    });

    // Newsletter 3
    $('#nl-selector3').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card3").addClass("added");
        } else {
            $(".nl-card3").removeClass("added");
        }
    });

    // Newsletter 4
    $('#nl-selector4').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card4").addClass("added");
        } else {
            $(".nl-card4").removeClass("added");
        }
    });

    // Newsletter 5
    $('#nl-selector5').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card5").addClass("added");
        } else {
            $(".nl-card5").removeClass("added");
        }
    });

    // Newsletter 6
    $('#nl-selector6').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card6").addClass("added");
        } else {
            $(".nl-card6").removeClass("added");
        }
    });

    // Newsletter 7
    $('#nl-selector7').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card7").addClass("added");
        } else {
            $(".nl-card7").removeClass("added");
        }
    });

    // Newsletter 9
    $('#nl-selector9').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card9").addClass("added");
        } else {
            $(".nl-card9").removeClass("added");
        }
    });

    // Newsletter 10
    $('#nl-selector9').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card10").addClass("added");
        } else {
            $(".nl-card10").removeClass("added");
        }
    });

    // Newsletter 11
    $('#nl-selector11').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card11").addClass("added");
        } else {
            $(".nl-card11").removeClass("added");
        }
    });

    // Newsletter 12
    $('#nl-selector12').click(function() {
        if ($(this).is(':checked')) {
            $(".nl-card12").addClass("added");
        } else {
            $(".nl-card12").removeClass("added");
        }
    });

    // * Hide fixed nav content on click
    $('.mm-form-top').click(function() {
        $(".hidden-content").toggleClass("navbar-hide");
        $(".mm-bottom-nav").toggleClass("mm-border-top");
    });

    // * Drop dropup menu
    $(".collapse-arrow").click(function(){
        $(".hidden-content").removeClass("navbar-hide");
        $(".mm-bottom-nav").toggleClass("mm-border-top");
    });

});

