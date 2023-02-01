$(document).ready(function() {
    let width, growth, interval, number;
    
    $('#start').click(function() {
      width = parseInt($('#width').val());
      growth = parseInt($('#growth').val());
      interval = parseInt($('#interval').val());
      number = parseInt($('#number').val());
      
      for (let i = 0; i < number; i++) {
        let x = Math.floor(Math.random() * ($(window).width() - width));
        let y = Math.floor(Math.random() * ($(window).height() - width));
        let circle = $('<div class="circle"></div>').css({
          'left': x + 'px',
          'top': y + 'px',
          'width': width + 'px',
          'height': width + 'px'
        });
        $('body').append(circle);
        growCircle(circle);
      }
    });
    
    function growCircle(circle) {
      setInterval(function() {
        width += growth;
        circle.css({
          'width': width + 'px',
          'height': width + 'px',
          'border-radius': (width / 2) + 'px'
        });
      }, interval);
    }
    
    $('body').on('click', '.circle', function() {
      $(this).remove();
    });
    
});
  