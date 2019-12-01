/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.bulthaup = {
    attach: function (context, settings) {
    // гамбургер меню      
      $('.hamburger').once().click(function () {
        $(this).toggleClass('is-active');
        $('.region-primary-menu').fadeToggle(500);
      });
    // Шапка фон
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".page-header").addClass("active");
      } else {
         $(".page-header").removeClass("active");
      }
  });

  // $('a').once().click(function(e) {
  //   e.preventDefault();
  // });

      // большой слайдер
    //   $('.block--type-slayder .field--name-field-slide').once().slick({
    //     fade: true,
    //     autoplay: true,
    //     pauseOnHover: false,
    //   });
    //   // Анимация
    //   $('.block-glavnayaopisanie .text').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeInLeft slower');
    //     },
    //  { offset: '90%' });

    //   $('.block-glavnayaopisanie .image').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeInRight slower');
    //     },
    // { offset: '90%' });

    //   $('.block-kukhninaglavnuyu .text').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeIn slower');
    //     },
    // { offset: '90%' });

    //   $('.block-kukhninaglavnuyu .image').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeIn slower');
    //     },
    //   { offset: '90%' });

    //   $('.block-aksessuryitekhnikanaglavnuyu').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeIn slower');
    //     },
    //   { offset: '90%' });

    //   $('.block-views-block-proekty-block-tofront .views-row.even').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeInUp slower');
    //     },
    //   { offset: '90%' });

    //   $('.block-views-block-proekty-block-tofront .views-row.odd').once().waypoint(function() {
    //     $(this.element).toggleClass('animated fadeInUp slower');
    //     },
    //   { offset: '90%' });

    //   // позврат вверх
    //     $('.block-socsetipodval i.icon-up-thin').once().click(function() {
    //       $("html, body").animate({ scrollTop: 0 }, "slow");
    //       return false;
          
    //     });
    //   // модалки
    //   $('.css-modal_content .hbtnblk').once().click(function() {
    //     $(this).closest('.css-modal_content').addClass('animated fadeIn').html("<p>Отправленно. Мы скоро перезвоним!</p>");
    //     return false;
    //   });
    //     // обратный отсчет
    //     $('.block-brendschetchiki .number').once().counterUp({
    //       delay: 10,
    //       time: 1500
    //     });
    //     // плавающие элементы
    //     $('.paragraph--type--chast-opisaniya-serii .float').once().stickySidebar({
    //       topSpacing: 61,
    //       bottomSpacing: 60
    //     });
    }
};


})(jQuery, Drupal);
