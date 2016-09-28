$(document).ready(function () {
    $('button').click(function () {
        $('button').removeClass("selected");
        $(this).addClass("selected");
    });
});