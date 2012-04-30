# Background animation
#
$(->
  if $('body.intro').length is 1
    $('a').click ->
      $('#background').animate { opacity: 1 }, 800
      $('#logo').animate { opacity: 0.1 }, 800, ->
        go = -> location.href = 'page.html'
        setTimeout go, 500
)
