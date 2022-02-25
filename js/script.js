// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(document).ready(function () {
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

    // Club Selection1
    $('#club-selector1').click(function() {
        if ($(this).is(':checked')) {
            $(".club-card1").addClass("added");
        } else {
            $(".club-card1").removeClass("added");
        }
    });

    // Comm Selection1
    $('#comm-selector1').click(function() {
        if ($(this).is(':checked')) {
            $(".comm-card1").addClass("added");
        } else {
            $(".comm-card1").removeClass("added");
        }
    });

    // * Hide fixed nav content on click
    $('.mm-form-top').click(function() {
        $(".hidden-form").addClass("navbar-hide");
        $(".mm-bottom-nav").toggleClass("mm-border-top");
    });

    // * Drop dropup menu
    $(".collapse-arrow").click(function(){
        $(".hidden-form").removeClass("navbar-hide");
        $(".mm-bottom-nav").toggleClass("mm-border-top");
    });
    
    // if ($(this).is(':checked')) {
    //     $(".mag-card1").addClass("added");
    // } else {
    //     $(".mag-card1").removeClass("added");
    // }

    // Display correct Brand circle on click.
    // Print
    $("#print-tab").click(function(){
        $(this).addClass("focus-print");
        $("#digital-tab").removeClass("focus-digital");
        $("#club-tab").removeClass("focus-club");
        $("#comm-tab").removeClass("focus-comm");
    });

    // Digital
    $("#digital-tab").click(function(){
        $(this).addClass("focus-digital");
        $("#print-tab").removeClass("focus-print");
        $("#club-tab").removeClass("focus-club");
        $("#comm-tab").removeClass("focus-comm");
    });

    // Club
    $("#club-tab").click(function(){
        $(this).addClass("focus-club");
        $("#print-tab").removeClass("focus-print");
        $("#digital-tab").removeClass("focus-digital");
        $("#comm-tab").removeClass("focus-comm");
    });

    // Communication
    $("#comm-tab").click(function(){
        $(this).addClass("focus-comm");
        $("#print-tab").removeClass("focus-print");
        $("#digital-tab").removeClass("focus-digital");
        $("#club-tab").removeClass("focus-club");
    });

    // $(".short-txt").click(function(){
    //     $(this).addClass("focus-comm");
    //     $("#print-tab").removeClass("focus-print");
    //     $("#digital-tab").removeClass("focus-digital");
    //     $("#club-tab").removeClass("focus-club");
    // });

    // $(".long-txt").click(function(){
    //     $(this).addClass("focus-communication");
    //     $("#print-tab").removeClass("focus-print");
    //     $("#digital-tab").removeClass("focus-digital");
    //     $("#club-tab").removeClass("focus-club");
    // });

    // ? If hasClass .short-txt -> removeClass (.focus-communication/focus-print/focus-digital/focus-club) addClass .focus-comm
    // ? ELSE If hasClass .long-txt -> removeClass (.focus-comm/focus-print/focus-digital/focus-club) addClass .focus-communication
    

});

// JS for TABS functionality
function openPage(evt, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
    }

