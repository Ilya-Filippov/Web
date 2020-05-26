$(document).ready(function () {
$('#offer-form').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    url:'email.php',
    type: 'POST',
    data: $(this).serialize(),
    success:function (data) {
      alert("Спасибо за заявку, скоро мы вам перезвоним");
      $('#offer-form')[0].reset();
    },
    error: function (jqXHR, textStatus) {
      console.log(jqXHR + ':' + textStatus);
    }
  });
});
});
