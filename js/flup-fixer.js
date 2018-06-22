$(function() {
  $('input').focus(function() {
    $(this).siblings('.placeholder').addClass('active');
  });

  $('input').blur(function() {
    if (this.value) {
      $(this).siblings('.placeholder').addClass('active');
    }
    else {
      $(this).siblings('.placeholder').removeClass('active');
    }
  });
})