$(function() {
  $('form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
      ,accountType: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Введите Ваше имя',
        minlength: 'Имя слишком короткое'
      },
      email: {
        required: 'Введите email',
        email: 'Некорректный email адрес'
      }
    }
  });
});