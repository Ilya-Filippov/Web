$(document).ready(function () {
  var modal = document.querySelector('#modal');
  var close = document.querySelector('#close');
  close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
  })
  setTimeout(function() {
    modal.classList.remove('modal_active');
  }, 5000);
})
