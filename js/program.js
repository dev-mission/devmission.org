  /*$(document).ready(function () {
        var subMenuOffset = $(".wrapper-sub-menu").offset().top;
        console.log(subMenuOffset);
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > subMenuOffset) {
                $(".wrapper-sub-menu").addClass("navbar-fixed-top", "top");
                $("#program-content").css("padding-top", "70px")
            } else {
                $(".wrapper-sub-menu").removeClass("navbar-fixed-top top");
                $("#program-content").css("padding-top", "0px")
            }
        })
    })

    $('body').scrollspy({
        target: '#navbar-example'
    })

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })
    = not working =
    $(function () {
         $(document).on("click", ".sub-menu a.page-scroll", function (event) {
             var $anchor = $(this).offset().top;
             console.log($anchor);
             $("html, body").stop().animate({
                 scrollTop: $(($anchor))
             }, 1500, "easeInOutExpo");
             event.preventDefault();
         });
     });*/