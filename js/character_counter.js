(function ($) {

  $.fn.characterCounter = function(){
    return this.each(function(){

      var itHasLengthAttribute = $(this).attr('length') !== undefined;

      if(itHasLengthAttribute){
        $(this).on('input', updateCounter);
        $(this).on('focus', updateCounter);
        $(this).on('blur', removeCounterElement);

        addCounterElement($(this));
      }

    });
  };

  function updateCounter(){
    var maxLength     = +$(this).attr('length'),
    actualLength      = +$(this).val().length,
    isValidLength     = actualLength <= maxLength;

    $(this).parent().find('span[class="pmab-character-counter"]')
                    .html( actualLength + '/' + maxLength);

    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input){
    var $counterElement = $('<span/>')
                        .addClass('pmab-character-counter')
                        .css('float','right')
                        .css('font-size','12px')
                        .css('height', 1);

    $input.parent().append($counterElement);
  }

  function removeCounterElement(){
    $(this).parent().find('span[class="pmab-character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input){
    var inputHasInvalidClass = $input.hasClass('pmab-invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('pmab-invalid');
    }
    else if(!isValidLength && !inputHasInvalidClass){
      $input.removeClass('pmab-valid');
      $input.addClass('pmab-invalid');
    }
  }

  $(document).ready(function(){
    $('input, textarea').characterCounter();
  });

}( jQuery ));
