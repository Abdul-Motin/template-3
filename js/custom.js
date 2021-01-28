$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
    // owl carousel 

    $('.testimonial_slide').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        dots:false,
        autoplayTimeout:3000,
        smartSpeed:800,
        mouseDrag:true,
        touchDrag:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // scroll animation 
    AOS.init({
        offset: 200,
        duration: 1500,
    });
    
    // smooth scroll top button
  $("#BtnTop").click(function(){
    $('html, body').animate({scrollTop : 0},800);
  });
  $(window).scroll(function(){
    if($(this).scrollTop()> 40){
      $('#BtnTop').fadeIn();
    }else{
      $('#BtnTop').fadeOut();
    }
  });

  $('.slider_slide').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:true,
    prevArrow:'.arrow_left',
    nextArrow:'.arrow_right',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 600,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_slide2').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:true,
    prevArrow:'.arrow_left2',
    nextArrow:'.arrow_right2',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 600,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_slide3').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:true,
    prevArrow:'.arrow_left3',
    nextArrow:'.arrow_right3',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 600,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.footer_slide').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 600,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  //====================================================================//
    // menu fix on scroll
    //====================================================================//
    shapers.on('scroll',function(){
      if (shapers.scrollTop() > 100) {
           $('#main_menu').addClass('animated slideInDown fix')
        } else {
            $('#main_menu').removeClass('animated slideInDown fix')
        }
  })

});