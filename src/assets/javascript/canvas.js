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

      // Waypoint animate.
      $('#global-map').waypoint(function (direction) {
        if (direction === 'down') {
          globalMapInit();
        }
        this.destroy();
      }, {
        offset: '70%',
        triggerOnce: true,
      });
    }
  });

})(jQuery);
