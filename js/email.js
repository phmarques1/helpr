'use strict';

(function(){
  $(document).ready(function(){
    $.support.cors = true;
    $('#email').on('submit',function(e){
      e.preventDefault();
      var payload = {
        email: $('input[type=email]').val(),
        product: 'Helpr'
      };
      var url = [ENV.backend, 'PotentialUsers'].join('/');
      $.ajax({
        url: url,
        type: 'POST',
        data: payload
      }).done(function(d) {
        sweetAlert("You're awesome!", "We'll be in touch soon enough :)", "success");
      });
    });
  });
})();
