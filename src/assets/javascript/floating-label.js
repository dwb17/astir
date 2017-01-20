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
