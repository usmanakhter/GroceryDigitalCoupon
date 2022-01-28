var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
jQuery.noConflict();

$(function clik() {
    let clp = document.querySelectorAll(".CouponActionButton");
    var btnToClick = clp;
    $(btnToClick).each(function () {
        $(this).click();
    });
});