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
      var customCompanywaypointOffset = '60%';


      // Company page
      $('#global-map').waypoint(function (direction) {
        window.globalMapInit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#facts').waypoint(function (direction) {
        window.revenueInit();
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
      $('#offset-print').waypoint(function (direction) {
        window.pantoneinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#cmyk-print').waypoint(function (direction) {
        window.cmykinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#cold-activated-print').waypoint(function (direction) {
        window.coldactivatedinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#internal-print').waypoint(function (direction) {
        window.lithographicinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#interior-side').waypoint(function (direction) {
        window.internalvarnishinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#inject-coating').waypoint(function (direction) {
        window.promocodesinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#pry-off-interior').waypoint(function (direction) {
        window.pryoffinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#twist-off-interior').waypoint(function (direction) {
        window.twistoffinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#oxygen-interior').waypoint(function (direction) {
        window.o2scavengerinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });
      $('#oxygen-barrier-interior').waypoint(function (direction) {
        window.o2barrierinit();
        this.destroy();
      }, {
        offset: customwaypointOffset,
        triggerOnce: true,
      });






    }
  });

})(jQuery);
