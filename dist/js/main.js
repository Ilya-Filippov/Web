$(document).ready(function () {
  var modal = document.querySelector('#modal');
  var close = document.querySelector('#close');
  close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
  })
  setTimeout(function() {
    modal.classList.remove('modal_active');
  }, 5000);
 // Валидация форм
 $('#brif-form').validate({
   errorElement: "div",
   errorClass:"invalid",
   rules: {
     email:{
       email: true,
       required: true
     },
     name: {
       required: true,
       minlength: 2,
       maxlength: 15
     },
     phone:{
       required: true,
       minlength: 18
     }
   },
   messages: {
     name: {
       required: "Заполните поле",
       minlength: "Имя должно быть длинее 2 символов",
       maxlength: "Заполните поле"
     },
     phone:{
       required: "Заполните поле",
       minlength: "Заполните поле"
     },
     email:{
       required:"Заполните поле",
       email:"Введите коректный email"
     }
   }
 });

 $('#offer-form').validate({
   errorClass:"invalid",
   rules: {
     name: {
       required: true,
       minlength: 2,
       maxlength: 15
     },
     phone:{
       required: true,
       minlength: 18
     }
   },
   messages: {
     name: {
       required: "Заполните поле"
     },
     phone:{
       required: "Заполните поле",
       minlength: "Заполните поле"
     }
   }
});
// Маска для телефона
$('.phone').mask("+7 (999) 999-99-99")});
