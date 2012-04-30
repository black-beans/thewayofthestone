(function() {

  $(function() {
    if ($('body.intro').length === 1) {
      return $('a').click(function() {
        $('#background').animate({
          opacity: 1
        }, 800);
        return $('#logo').animate({
          opacity: 0.1
        }, 800, function() {
          var go;
          go = function() {
            return location.href = 'page.html';
          };
          return setTimeout(go, 500);
        });
      });
    }
  });

}).call(this);
