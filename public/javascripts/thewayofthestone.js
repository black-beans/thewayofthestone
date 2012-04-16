(function() {

  $(function() {
    if ($('body.intro').length === 1) {
      return $('nav li a').click(function(event) {
        var link;
        link = $(this);
        $('nav').fadeOut();
        $('#logo_left').animate({
          left: -150,
          queue: false
        }, 400);
        $('#logo_right').animate({
          left: 150,
          queue: false
        }, 400, function() {
          return $('#logo').animate({
            zoom: 4,
            opacity: 0,
            top: -50
          }, 800, function() {
            return location.href = link.attr('href');
          });
        });
        return event.preventDefault();
      });
    }
  });

}).call(this);
