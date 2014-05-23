$(document).foundation();

$("#tabs").idTabs(function (id, list, set) {
    $("a", set).removeClass("selected")
        .filter("[href='" + id + "']", set).addClass("selected");
    for (i in list)
        $(list[i]).hide();
    $(id).fadeIn();
    return false;
});

$("#tab-heading").find("a").click(function (event) {
    event.preventDefault();
});

$(window).load(function () {

//    var s = skrollr.init({
//        forceHeight: false,
//        render: function (data) {
//            console.log(data.curTop);
//        }
//    });
//    s.refresh(document.body);
});


$(' .thumbs > li ').each(function () {
    $(this).hoverdir();
});


if ($.browser.msie()) {
    $("html").addClass("ie");
} else {
    $("html").addClass("not-ie");
}

$("html").removeClass("no-js");
$("html").addClass("js");

// Wait for window load
$(window).load(function () {
    // Animate loader off screen
    $("#loader").animate({
        opacity: 0
    }, 1500, function () {
        $("#loader").css("display", "none");
    });
});