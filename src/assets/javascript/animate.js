/**
 * @file
 * A JavaScript file for the waypoints fx.
 *
 * It uses the ccs-animate classes.
 */
(function ($) {
  'use strict';
  $(document).ready(function () {
    // Change menu icon color after video element.

    $('#js-video').waypoint(function (direction) {
      $('.hamburger').toggleClass('is-dark');
    }, {
      offset: '-80%',
    });

    $('.on-dark-color').each(function() {
      new Waypoint.Inview({
        element: this,
        enter: function(direction) {
          if(direction === 'up') {
            $('.hamburger').removeClass('is-dark');
          }
        },
        entered: function(direction) {
          if(direction === 'up') {
            $('.hamburger').addClass('is-dark');
          };
        },
        exit: function(direction) {
          if(direction === 'down') {
            $('.hamburger').removeClass('is-dark');
          }
        },
        exited: function(direction) {
          if(direction === 'down') {
            $('.hamburger').addClass('is-dark');
          }
        }
      })
    });

    // Only add efects to desktop
    if(!window.matchMedia('(max-width: 768px)').matches) {
      // Hide all elements.
      $('.js-waypoint-text').addClass('is-going-to-be-animated');
      $('.js-waypoint-image').addClass('is-going-to-be-animated');

      // Special canvas text handling
      $('.js-waypoint-text--canvas').addClass('is-going-to-be-animated');
      $('.js-waypoint-text--canvas').waypoint(function (direction) {
        if (direction === 'down') {
          // Show and animate elements once.
          if ($(this.element).hasClass('is-going-to-be-animated')) {
            $(this.element).removeClass('is-going-to-be-animated');
            $(this.element).addClass('animated fadeInUp');
          }
        }
        this.destroy();
      }, {
        offset: '60%',
        triggerOnce: true,
      });

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
        this.destroy();
      }, {
        offset: '80%'
      });
    }
  });

})(jQuery);
