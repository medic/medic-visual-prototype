
$(function () {

  $('.inbox-items').on('click', 'li', function (e) {
    e.preventDefault();
    var elem = $(this);
    if (!elem.is('selected')) {
      var inboxItems = $('.inbox-items');
      inboxItems.find('.selected').removeClass('selected');
      elem.addClass('selected');
      $('.row.content').addClass('show-body');
    }
  });

  $('.slide-back').on('click', function (e) {
    e.preventDefault();
    $('.row.content').removeClass('show-body');
  });

  $('.row.header .tabs').on('click', 'a', function (e) {
    e.preventDefault();
    var elem = $(this);
    if (!elem.is('selected')) {
      $('.row.header .tabs .selected')
        .removeClass('selected')
        .find('.mm-icon')
        .addClass('mm-icon-inverse');
      elem
        .addClass('selected')
        .find('.mm-icon')
        .removeClass('mm-icon-inverse');

    }
  });

});

