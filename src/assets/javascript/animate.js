/**
 * @file
 * A JavaScript file for the waypoints fx.
 *
 * It uses the ccs-animate classes.
 */
(function ($) {
  'use strict';
  $(document).ready(function () {
    // Only add efects to desktop
    if(!window.matchMedia('(max-width: 768px)').matches) {



      // Hide all elements.
      $('.js-waypoint-text').addClass('is-going-to-be-animated');
      $('.js-waypoint-image').addClass('is-going-to-be-animated');

      // Waypoint animate.
      $('.js-waypoint-text').waypoint(function (direction) {
        if (direction === 'down') {
          // Show and animate elements once.
          if ($(this.element).hasClass('is-going-to-be-animated')) {
            $(this.element).removeClass('is-going-to-be-animated');
            $(this.element).addClass('animated fadeInUp');
          }
        }
        this.destroy();
      }, {
        offset: '40%',
        triggerOnce: true,
      });


      $('.js-waypoint-image').waypoint(function (direction) {
        if (direction === 'down') {
          // Show and animate elements once.
          if ($(this.element).hasClass('is-going-to-be-animated')) {
            $(this.element).removeClass('is-going-to-be-animated');
            // Check if parent has odd class to change direction
            if($(this.element).parents('.section').hasClass('odd')) {
              $(this.element).addClass('animated slideInRight');
            } else {
              $(this.element).addClass('animated slideInLeft');
            }
          }
        }
      }, {
        offset: '80%'
      });
    }
  });

})(jQuery);
