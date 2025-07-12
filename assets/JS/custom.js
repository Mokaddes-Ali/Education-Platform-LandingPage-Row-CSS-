<<<<<<< HEAD
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



 let $blogSlider = $('.blogSlider');

  $blogSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    dots: false,
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

  // Dot click handler
  $('.blog-dot').click(function () {
    let slideIndex = $(this).data('slide');
    $blogSlider.slick('slickGoTo', slideIndex);
  });

  // Update dot color on slide change
  $blogSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.blog-dot').each(function () {
      const $circle = $(this).find('circle');
      if ($(this).data('slide') === currentSlide) {
        $circle.attr('fill', '#FFB900');
      } else {
        $circle.attr('fill', '#5F5B53');
      }
    });
  });


=======
 $(document).ready(function(){

  $(".mobile-nav .open-icon").click(function(){
                $(".site-nav-menu").addClass("mobile-menu");
                $(".open-icon").hide();
                $(".close-icon").show();
            });

            $(".mobile-nav .close-icon").click(function(){
                $(".site-nav-menu").removeClass("mobile-menu");
                $(".close-icon").hide();
                  $(".open-icon").show();

            })


            
  $('#testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });

>>>>>>> e3b87450fa8b20a0e3a048945e439d4aedebe2e4
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

<<<<<<< HEAD


  function updateArrowColor() {
    const $prev = $('.prev-btn');
    const $next = $('.next-btn');

    const currentSlide = $slider.slick('slickCurrentSlide');
    const slideCount = $slider.slick('getSlick').slideCount;
    const slidesToShow = $slider.slick('slickGetOption', 'slidesToShow');

    if (currentSlide === 0) {
      // First slide - disable prev
      $prev.css('background', '').attr('disabled', true);
      $next.css('background', 'none').attr('disabled', false);
    } else if (currentSlide >= slideCount - slidesToShow) {
      // Last slide - disable next
      $next.css('background', '').attr('disabled', true);
      $prev.css('background', 'none').attr('disabled', false);
    } else {
      // Middle slides - enable both
      $prev.css('background', '').attr('disabled', false);
      $next.css('background', '').attr('disabled', false);
    }
  }
=======
  function updateArrowColor(){
  const $prev = $('.prev-btn');
  const $next = $('.next-btn');

  const currentSlide = $slider.slick('slickCurrentSlide');
  const slideCount = $slider.slick('getSlick').slideCount;
  const slidesToShow = $slider.slick('slickGetOption', 'slidesToShow');

  if (currentSlide === 0) {
    // First slide - disable prev
    $prev.css('background', '#ccc').attr('disabled', true);
    $next.css('background', '#FFB900').attr('disabled', false);
  } else if (currentSlide >= slideCount - slidesToShow) {
    // Last slide - disable next
    $next.css('background', '#ccc').attr('disabled', true);
    $prev.css('background', '#FFB900').attr('disabled', false);
  } else {
    // Middle slides - enable both
    $prev.css('background', '#FFB900').attr('disabled', false);
    $next.css('background', '#FFB900').attr('disabled', false);
  }
}
>>>>>>> e3b87450fa8b20a0e3a048945e439d4aedebe2e4


  $slider.on('afterChange', updateArrowColor);
  updateArrowColor();
});

<<<<<<< HEAD

AOS.init({
  duration: 1200,
  once: false,
  mirror: true,
  offset: 100,
});
=======
  
      AOS.init({
        duration: 1200,
        once: false,
        mirror: true,
        offset: 100,
      });
>>>>>>> e3b87450fa8b20a0e3a048945e439d4aedebe2e4
