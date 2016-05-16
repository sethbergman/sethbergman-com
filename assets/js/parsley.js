(($) ->
  'use strict'

  floatingLabel = (onload) ->
    $input = $(this)

    # Check for value onload
    if onload
      $.each $('.bt-flabels__wrapper input'), (index, value) ->
        $current_input = $(value)
        if $current_input.val()
          $current_input.closest('.bt-flabels__wrapper').addClass 'bt-flabel__float'
          return

    setTimeout (->
      if $input.val()
        $input.closest('.bt-flabels__wrapper').addClass 'bt-flabel__float'
      else
        $input.closest('.bt-flabels__wrapper').removeClass 'bt-flabel__float'
      return
    ), 1
    return

  $('.bt-flabels__wrapper input').keydown floatingLabel
  $('.bt-flabels__wrapper input').change floatingLabel

  window.addEventListener 'load', floatingLabel(true), false

  # Parsley
  $('.js-flabels').parsley().on 'form:error', ->
    $.each this.fields, (key, field) ->
      if field.validationResult isnt true
        field.$element.closest('.bt-flabels__wrapper').addClass 'bt-flabels__error'
        return
    return

  $('.js-flabels').parsley().on 'field:validated', ->
    if this.validationResult is true
      this.$element.closest('.bt-flabels__wrapper').removeClass 'bt-flabels__error'
      return
    else
      this.$element.closest('.bt-flabels__wrapper').addClass 'bt-flabels__error'
      return


  return
) jQuery
