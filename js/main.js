$(document).ready(function() {
    // Initialize mobile side nav
    $(".button-collapse").sideNav();

    // Modal trigger
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    // Lang selector trigger
    $(".lang-selector").click(function() {
        $(this).toggleClass("show");
    });
})