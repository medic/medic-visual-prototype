
$(function () {

  $('.inbox-items').on('click', 'li', function (e) {
    e.preventDefault();
    var elem = $(this);
    if (!elem.is('selected')) {
      var inboxItems = $('.inbox-items');
      inboxItems.find('.selected').removeClass('selected');
      elem.addClass('selected');
      $('.row.content').addClass('show-body');
      $('.slide-back .mm-button').removeClass('mm-button-disabled');
    }
  });

  $('.slide-back').on('click', function (e) {
    e.preventDefault();
    $('.slide-back .mm-button').addClass('mm-button-disabled');
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

  $('#date')
    .datepicker()
    .on('changeDate', function(ev) {
      $('#date .mm-button-text').text(moment(ev.date).format('Do MMM, YYYY'));
      $('#date').datepicker('hide');
    })
    .on('show', function(ev) {
      // todo only on mobile
      if ($('#back').is(':visible')) {
        $('.datepicker').css({
          right: '10px',
          left: 'inherit'
        });
      }
    });

});

