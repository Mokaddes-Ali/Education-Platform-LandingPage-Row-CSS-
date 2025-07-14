$(document).ready(function () {

  $(".mobile-nav .open-icon").click(function () {
    $(".site-nav-menu").addClass("mobile-menu");
    $(".open-icon").hide();
    $(".close-icon").show();
  });

  $(".mobile-nav .close-icon").click(function () {
    $(".site-nav-menu").removeClass("mobile-menu");
    $(".close-icon").hide();
    $(".open-icon").show();

  })



  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true
  });

// Cources Slider
  let $slider = $(".slider");

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  function updateArrowColor() {
    const $prev = $('.prev-btn');
    const $next = $('.next-btn');

    const currentSlide = $slider.slick('slickCurrentSlide');
    const slideCount = $slider.slick('getSlick').slideCount;
    const slidesToShow = $slider.slick('slickGetOption', 'slidesToShow');

     //enabled button
  const enabledStyle = {
    backgroundColor: '#FFB900',
    color: '#ffffff',
    cursor: 'pointer',
    border: '2px solid #FFB900',
    padding: '6px 6px',
    borderRadius: '100%',
  };

  //disabled button
  const disabledStyle = {
    backgroundColor: '#FFFFFF',
    color: '#FFB900',
    cursor: 'not-allowed',
    border: '2px solid #FFB900',
    padding: '6px 6px',
     borderRadius: '100%',
  };

    if (currentSlide === 0) {
    $prev.css(disabledStyle).attr('disabled', true);
    $next.css(enabledStyle).attr('disabled', false);
  } else if (currentSlide >= slideCount - slidesToShow) {
    $next.css(disabledStyle).attr('disabled', true);
    $prev.css(enabledStyle).attr('disabled', false);
  } else {
    $prev.css(enabledStyle).attr('disabled', false);
    $next.css(enabledStyle).attr('disabled', false);
  }
  }


  $slider.on('afterChange', updateArrowColor);
  updateArrowColor();
});


// Blog Slider
let $blogSlider = $('.blogSlider');

$blogSlider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


// Scrooll Button
 const $scrollBtn = $('.scroll-top-btn');

  //button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $scrollBtn.fadeIn(600);
    } else {
      $scrollBtn.fadeOut(600);
    }
  });

  //click
  $scrollBtn.click(function () {
    $('html, body').animate({
      scrollTop: $('#hero').offset().top
    }, 1200, 'swing');
  });
// AOS Animation
AOS.init({
  duration: 1200,
  once: false,
  mirror: true,
  offset: 100,
});