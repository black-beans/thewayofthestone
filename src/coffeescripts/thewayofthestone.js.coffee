# Open door animation
#
$(->
  if $('body.intro').length is 1
    $('nav li a').click (event) ->
      link = $(@)

      $('nav').fadeOut()

      #TODO: curtain opens in half the way
      $('#logo_left').animate({
        left: -150
        queue: false
      }, 400)

      $('#logo_right').animate({
        left: 150
        queue: false
      }, 400, ->
        $('#logo').animate({
          zoom: 4
          opacity: 0
          top: -50
        }, 800, ->
          location.href = link.attr 'href'
        )
      )

      event.preventDefault()
)
