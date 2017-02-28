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

/**
 * @file
 * Float the label. Based on http://jsfiddle.net/RyanWalters/z9ymd852/
 */

$(document).ready(function() {
  //hide honeypot field
  $('#webform-component-url').hide();

  // Hide contact form
  $('.js-hidden').hide();

  // Show contect form on click
  $('.js-show-request-form').on('click', function(){
    $(this).hide();
    $("#request-form").slideDown();
    // Scroll to form
    $('html, body').animate({
        scrollTop: $("#request-form").offset().top
    }, 900);

    return false;
  });

  $("#request-form").validate({
    errorElement: 'span',
    ignore: ".ignore",
    focusCleanup: true,
    messages: {
      message: "Please specify your message",
      e_mail: {
        required: "We need your email address to contact you.",
        email: "Your email address must be in the format of name@domain.com"
      }
    },
    submitHandler: function(form) {
      $(form).ajaxSubmit({
        dataType: 'json',
        beforeSubmit:  showRequest,  // pre-submit callback
        success:  showResponse  // post-submit callback
      });
    }
  });
  // pre-submit callback
  function showRequest(formData, $form, options) {
      $form.find('.webform-submit').addClass('is-submitting').val('Form is being processed');
  }

  // post-submit callback
  function showResponse(responseText, statusText, xhr, $form)  {
    if (responseText.status == 'OK') {
      $form.hide();
      $('#form-response').text(responseText.message).show();
    } else {
      $('#form-response').text(responseText.message).show();
    }
    //$form.resetForm();
  }
});

/**
 * @file
 * Float the label. Based on http://jsfiddle.net/RyanWalters/z9ymd852/
 */

$(document).ready(function() {

  $('.js-floating-label').addClass('is-floating-label');

  $('.js-floating-label input, .js-floating-label textarea').on('focus blur', function (e) {
      $(this).parents('.js-floating-label').toggleClass('is-floated', (e.type === 'focus' || this.value.length > 0));
  }).trigger('blur');
});

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// Look for overlay
var navigation = document.getElementById("navigation");
  // On click
  hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  navigation.classList.toggle("is-enabled");
});
