/**
 * @file
 * A JavaScript file for the Canvas .
 *
 */
(function ($) {
  'use strict';
  $(document).ready(function () {
    // Only add efects to desktop
    if(!window.matchMedia('(max-width: 768px)').matches) {
      // Waypoint init canvas.
      var customwaypointOffset = '40%';


      // Company page
      $('#global-map').waypoint(function (direction) {
        if (direction === 'down') {
          globalMapInit();
        }
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });

      // Product page.
      $('#white-primer').waypoint(function (direction) {
        window.whitePrimerinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#transparent-primer').waypoint(function (direction) {
        window.transparentPrimerinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#aluminum-primer').waypoint(function (direction) {
        window.primeraluminiumPrimerinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });


    }
  });

})(jQuery);
