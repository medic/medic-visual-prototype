
$(function () {

  $('.inbox-items').on('click', 'li', function (e) {
    e.preventDefault();
    var elem = $(this);
    if (!elem.is('selected')) {
      var inboxItems = $('.inbox-items');
      inboxItems.find('.selected').removeClass('selected');
      elem.addClass('selected');
      $('body').addClass('show-content');
      $('.slide-back .mm-button').removeClass('mm-button-disabled');
    }
  });

  $('.slide-back').on('click', function (e) {
    e.preventDefault();
    $('.slide-back .mm-button').addClass('mm-button-disabled');
    $('body').removeClass('show-content');
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
      $('.dropdown.open .dropdown-menu').dropdown('toggle');
      // Change position when rendering in mobile
      if ($('#back').is(':visible')) {
        $('.datepicker').css({
          left: '3em',
          right: '3em',
          top: '9em'
        });
      }
      $('.datepicker').addClass('open dropdown-menu mm-dropdown-menu mm-dropdown-menu-inverse');
    });

});

