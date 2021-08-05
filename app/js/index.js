$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.header').addClass('header--active');
  } else {
    $('.header').removeClass('header--active');
  }
});
