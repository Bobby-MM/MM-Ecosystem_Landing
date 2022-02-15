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

