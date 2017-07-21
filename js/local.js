 $(document).ready(function() {

     resize_carousel();
     var init_animation = launch_animation();

     init_animation();

     $(window).resize(resize_carousel);
     $(window).resize(correct_logo_display);
     $(window).scroll(toggle_menu_position);

     $('#carousel_main_page').on('slid.bs.carousel', launch_animation());

     $('.project_container>.project_front, .project_container>.project_back').mouseover(function() {
         // var parent = $(this).parent();
         $(".project_front", $(this).parent()).addClass("rotate_y_180");
         $(".project_back", $(this).parent()).addClass("rotate_y_360").removeClass("rotate_y_180");
     });

     $('.project_container>.project_front, .project_container>.project_back').mouseout(function() {
         $(".project_front", $(this).parent()).removeClass("rotate_y_180");
         $(".project_back", $(this).parent()).addClass("rotate_y_180").removeClass("rotate_y_360");
     });

 });



 // resize_carousel() - dopasowuje rozmiar karuzeli do aktualnego rozmiaru okna

 function resize_carousel() {
     var new_height = $(window).height() - parseInt($("#top_page_bar").css("height"), 10);
     $(".carousel_item_container").css("max-height", new_height);
 };


 // correct_logo_display - funkcja koryguje wyświetlanie elementu .company_name>.navbar-brand
 // w zależności od rozdzielczości i pozycji scrolla pionowego

 function correct_logo_display() {
     var win_width = $(window).width();
     var cont_top = parseInt($('#navbar_container').css('top'), 10);

     if (((win_width >= 992) && (cont_top > 0)) || (win_width >= 1200)) {
         $('.company_name>.navbar-brand').css('display', 'inline-block');
     }
     if (((win_width < 1200) && (win_width >= 992) && (cont_top == 0)) || (win_width < 992)) {
         $('.company_name>.navbar-brand').css('display', 'none');
     }
 };

 // toggle_menu_position() - przełącza wyświetlanie głównego menu z FIXED na ABSOLUTE
 // w zależności od pozycji

 function toggle_menu_position() {

     var window_top = $(window).scrollTop();
     var top_bar_height = parseInt($('#top_page_bar').css('height'), 10);
     var nav_position = $('#navbar_container').css('position');

     if (window_top >= top_bar_height) {
         if (nav_position != 'fixed') {
             $('#navbar_container').css('position', 'fixed');
             $('#navbar_container').css('top', 0);
             $('#navbar_container').css('background-color', 'rgba(0,118,118,1)');

             $('#navbar_container').css('padding-top', '0px');
             $('#navbar_container').css('padding-bottom', '0px');

             $('#search_form_menu').css('margin-bottom', '20px');

             if (($(window).width() >= 992) && ($(window).width() < 1200)) {
                 $('.company_name>.navbar-brand').css('display', 'none');
             };
         };
     } else {
         if (nav_position != 'absolute') {
             $('#navbar_container').css('position', 'absolute');
             $('#navbar_container').css('top', parseInt($('#top_page_bar').css('height'), 10));
             $('#navbar_container').css('background-color', 'rgba(0,118,118,0.3)');

             $('#navbar_container').css('padding-top', '25px');
             $('#navbar_container').css('padding-bottom', '20px');

             $('#search_form_menu').css('margin-bottom', '0');

             if ($(window).width() >= 992) {
                 $('.company_name>.navbar-brand').css('display', 'inline-block');
             };
         };

     };

 };


 // uruchomienie animacji elementów slajdów na karuzeli w momencie ich załadowania ze slajdem

 function launch_animation() {
     return function() {
         $("#carousel_main_page .item.active       .slogan_container").css("display", "block");
         $("#carousel_main_page .item:not(.active) .slogan_container").css("display", "none");
     };
 };