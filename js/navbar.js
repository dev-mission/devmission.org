 $(document).ready(function () {
        var navbarOffset = 45;
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > navbarOffset) {
                $("nav").css("padding", "0px");
                $("#logo").removeClass("logo-fixed");
                $("#logo").addClass("logo-responsive");
                
            } else {
               $("nav").css("padding", "10px 0px");
            $("#logo").removeClass("logo-responsive");
                $("#logo").addClass("logo-fixed");
            }
        })
    })