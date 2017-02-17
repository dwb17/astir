(function() {
  $(window).on('load', function() {
    inview();
  })

  function inview() {
    var $example = $('#facts')
    var inview

    if ($example.length) {
      inview = new Waypoint.Inview({
        element: $('#facts')[0],
        enter: function(direction) {
          console.log('Enter triggered with direction ' + direction)
        },
        entered: function(direction) {
          console.log('Entered triggered with direction ' + direction)
        },
        exit: function(direction) {
          console.log('Exit triggered with direction ' + direction)
        },
        exited: function(direction) {
          console.log('Exited triggered with direction ' + direction)
        }
      })
    }
  }
}())
