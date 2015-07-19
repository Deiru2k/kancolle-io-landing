'use strict';

$('document').ready(() => {

  var success = $('#success');
  var already = $('#already');
  var failure = $('#failure');
  var form = $('#subscribe-form');
  var email = $('#email');

  var showSuccess = () => {
    form.hide();
    already.hide();
    failure.hide();
    success.show();
  };

  var showAlready = () => {
    form.hide();
    success.hide();
    failure.hide();
    already.show();
  };

  var showFailure = () => {
    form.hide();
    success.hide();
    already.hide();
    failure.show();
  };

  var tryAgain = () => {
    success.hide();
    already.hide();
    failure.hide();
    email.val(undefined);
    form.show();
  };

  var subscribe = () => {
    var value = email.val();
    $.ajax({
      type: 'POST',
      url: 'http://kancolle.io/subscribe',
      data: 'email=' + value,
      statusCode: {
        201: showSuccess,
        409: showAlready,
        500: showFailure
      }
    });
  };

  $('#try-again-btn').click(tryAgain);
  $('#subscribe-btn').click(subscribe);

});
