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


  $slider.on('afterChange', updateArrowColor);
  updateArrowColor();
});

  
      AOS.init({
        duration: 1200,
        once: false,
        mirror: true,
        offset: 100,
      });