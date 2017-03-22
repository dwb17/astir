/**
 * @file
 * A JavaScript file for the waypoints fx.
 *
 * It uses the ccs-animate classes.
 */
(function ($) {
  'use strict';
  $(document).ready(function () {
    // Scrool down on SVG click
    $('.scroll-down').on('click', function(){
      $('html, body').animate({
          scrollTop: $('.js-scroll-to').offset().top
      }, 1000);
    });

    // Change menu icon color after video element.
    $('#js-video').waypoint(function (direction) {
      $('.hamburger').toggleClass('is-dark');
      $('.logo').toggleClass('is-below-fold');
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
    if(!window.matchMedia('(max-width: 769px)').matches) {
      // Waypoint animate.
      $(".js-animate").addClass('is-going-to-be-animated').waypoint(function (direction) {
        if (direction === 'down') {
          var animateParent = $(this.element);
          // Show and animate elements once.
          if (animateParent.hasClass('is-going-to-be-animated')) {
            animateParent.removeClass('is-going-to-be-animated');
            // Animate text.
            $(".js-waypoint-text", animateParent).addClass('animated fadeInUp');
            // Animate image
            // Check if parent has odd class to change direction
            if(animateParent.hasClass('odd')) {
              $(".js-waypoint-image", animateParent).addClass('animated slideInRight');
            } else {
              $(".js-waypoint-image", animateParent).addClass('animated slideInLeft');
            }
          }
        }
        this.destroy();
      }, {
        offset: '40%',
        triggerOnce: true,
      });
    }
  });

})(jQuery);
