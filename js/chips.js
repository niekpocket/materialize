(function ($) {
  $(document).ready(function() {

    $(document).on('click.chip', '.pmab-chip .pmab-material-icons', function (e) {
      $(this).parent().remove();
    });

  });
}( jQuery ));