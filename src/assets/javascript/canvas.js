/**
 * @file
 * A JavaScript file for the Canvas .
 *
 */
(function ($) {
  'use strict';

  $(document).ready(function () {
    // Only add efects to desktop
    if(!window.matchMedia('(max-width: 769px)').matches) {
      // Add class to html to signify canvas enabled.
      $('html').addClass('js-canvas-enabled');
      // Waypoint init canvas.
      var customwaypointOffset = '20%';
      var customCompanywaypointOffset = '60%';
      var customProductswaypointOffset = '50%';

      $(".js-animate--canvas").addClass('is-going-to-be-animated').waypoint(function (direction) {
        if (direction === 'down') {
          var animateParent = $(this.element);
          // Show and animate elements once.
          if (animateParent.hasClass('is-going-to-be-animated')) {
            animateParent.removeClass('is-going-to-be-animated');
            // Animate text.
            $(".js-waypoint-text--canvas, .js-waypoint-text", animateParent).addClass('animated fadeInUp');
            // Animate image
            // Check if parent has odd class to change direction
            if(animateParent.hasClass('odd')) {
              $(".js-waypoint-image--canvas", animateParent).addClass('animated slideInRight');
            } else {
              $(".js-waypoint-image--canvas", animateParent).addClass('animated slideInLeft');
            }
          }
        }
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });

      // Facilities
      $('#sustainable').waypoint(function (direction) {
        window.thinkgreeninit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });

      // Company page
      $('#global-map').waypoint(function (direction) {
        window.globalMapInit();
        this.destroy();
      }, {
        offset: '80%',
        triggerOnce: true,
      });
      $('#facts').waypoint(function (direction) {
        window.revenueInit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#revenue-chart').waypoint(function (direction) {
        window.circlesInit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#about').waypoint(function (direction) {
        window.productionInit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });


      // Product page.
      $('#crown-corks').waypoint(function (direction) {
        window.anatomyinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#white-primer').waypoint(function (direction) {
        window.whitePrimerinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#transparent-primer').waypoint(function (direction) {
        window.transparentPrimerinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#aluminum-primer').waypoint(function (direction) {
        window.primeraluminiumPrimerinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#offset-print').waypoint(function (direction) {
        window.pantoneinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#cmyk-print').waypoint(function (direction) {
        window.cmykinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#cold-activated-print').waypoint(function (direction) {
        window.coldactivatedinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#internal-print').waypoint(function (direction) {
        window.lithographicinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#interior-side').waypoint(function (direction) {
        window.internalvarnishinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#inject-coating').waypoint(function (direction) {
        window.promocodesinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#pry-off-interior').waypoint(function (direction) {
        window.pryoffinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#twist-off-interior').waypoint(function (direction) {
        window.twistoffinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#oxygen-interior').waypoint(function (direction) {
        window.o2scavengerinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
      $('#oxygen-barrier-interior').waypoint(function (direction) {
        window.o2barrierinit();
        this.destroy();
      }, {
        offset: customProductswaypointOffset,
        triggerOnce: true,
      });
    }
    else {
      // Add class to html to signify canvas enabled.
      $('html').addClass('js-small-screen');
    }
  });

})(jQuery);
