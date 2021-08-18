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
  $('.gallery__slider').slick({
    loop: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1322,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.menu__item-link a, .logo, .footer__logo, .footer__item-link a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - $('.header').outerHeight();
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1200,
    );
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__link, .logo').on('click', function () {
    $('.menu__list--active').removeClass('menu__list--active');
  });
});
