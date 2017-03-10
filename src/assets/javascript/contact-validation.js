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
        email: "Your email address is invalid."
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
