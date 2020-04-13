$(document).ready(function () {
  new WOW().init();
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var buttonUp = $('#up')
  var top = $('#top')
  button.on('click', function () {
    modal.addClass('modal_active');
  })

  close.on('click', function () {
    modal.removeClass('modal_active');
  })

    $('#up').click(function(){
       $('html, body').animate({scrollTop:0}, 600);
       return false;
   });
});
