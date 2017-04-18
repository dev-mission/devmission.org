 $(document).ready(function () {
     aboutUsPage();
     aboutInfoTeams();
 });

 function aboutUsPage() {
     $("#portfolio-content-active").mixItUp();

     $("#testimonial-slider").owlCarousel({
         paginationSpeed: 500,
         singleItem: true,
         autoPlay: 3000,
     });

     $("#clients-logo").owlCarousel({
         autoPlay: 3000,
         items: 5,
         itemsDesktop: [1199, 5],
         itemsDesktopSmall: [979, 5],
     });

     $("#works-logo").owlCarousel({
         autoPlay: 3000,
         items: 5,
         itemsDesktop: [1199, 5],
         itemsDesktopSmall: [979, 5],
     });

     // Counter
     $('.counter').counterUp({
         delay: 10,
         time: 1000
     });
 }

 function aboutInfoTeams() {
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
     $(list[5]).click(function () {
         $(text).addClass("hidden");
         $(text[4]).removeClass("hidden");
     });
 }
