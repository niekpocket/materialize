(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.pmab-card', function (e) {
      if ($(this).find('> .pmab-card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.pmab-card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
        }
        else if ($(e.target).is($('.pmab-card .pmab-activator')) ||
                 $(e.target).is($('.pmab-card .pmab-activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.pmab-card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }

      $('.pmab-card-reveal').closest('.pmab-card').css('overflow', 'hidden');

    });

  });
}( jQuery ));