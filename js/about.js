 $(document).ready(function () {
        var list = $("#portofolio-list").children();
        var text = $("#portofolio-list-text").children();
        $(list[0]).click(function () {
            $(text).addClass("hidden");
        });
        $(list[1]).click(function () {
            $(text).addClass("hidden");
            $(text[0]).removeClass("hidden");
        });
        $(list[2]).click(function () {
            $(text).addClass("hidden");
            $(text[1]).removeClass("hidden");
        });
        $(list[3]).click(function () {
            $(text).addClass("hidden");
            $(text[2]).removeClass("hidden");
        });
        $(list[4]).click(function () {
            $(text).addClass("hidden");
            $(text[3]).removeClass("hidden");
        });
    });