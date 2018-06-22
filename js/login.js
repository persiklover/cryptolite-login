$(function() {
  $('form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'Введите email',
        email: 'Некорректный email адрес'
      },
      password: {
        required: 'Введите пароль',
        minlength: 'Пароль слишком короткий'
      }
    }
  });
})