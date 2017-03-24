$(document).ready(function() {
  if ($('.js-popup-trigger').length){
    $('.js-popup-trigger').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: 'auto',
      callbacks: {
        open: function() {
          document.querySelector('.video-element__tag').pause();
        },
        close: function() {
          document.querySelector('.video-element__tag').play();
        }
      }
    });
  }
});
