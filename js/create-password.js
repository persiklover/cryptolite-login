$(function() {
  $('form').validate({
    rules: {
      password: {
        required: true
      },
      password2: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      password: {
        required: 'Введите пароль',
        minlength: 'Пароль слишком короткий'
      },
      password2: {
        required: 'Введите пароль ещё раз',
        equalTo: 'Пароли не совпадают'
      }
    }
  });
})