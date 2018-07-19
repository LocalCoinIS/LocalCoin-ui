$(document).ready(function() {
    $(".mobile__burger").click(function() {
        $(".mobile__menu").toggleClass("show");
        return false;
    });
    $(".mobile__menu__close").click(function() {
        $(".mobile__menu").removeClass("show");
    });

    $(".select")
        .on("click", ".placeholder", function() {
            var parent = $(this).closest(".select");
            if (!parent.hasClass("is-open")) {
                parent.addClass("is-open");
                $(".select.is-open")
                    .not(parent)
                    .removeClass("is-open");
            } else {
                parent.removeClass("is-open");
            }
        })
        .on("click", "ul>li", function() {
            var parent = $(this).closest(".select");
            parent
                .removeClass("is-open")
                .find(".placeholder")
                .text($(this).text());
            parent
                .find("input[type=hidden]")
                .attr("value", $(this).attr("data-value"));
        });

    $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
    });
});
