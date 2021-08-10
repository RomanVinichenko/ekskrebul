$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });
  $('.top__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
  });
  $('.present__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    dots: false,
    arrows: true,
  });

  $('.menu a, .footer__logo, .footer__list a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1200,
    );
  });
});
