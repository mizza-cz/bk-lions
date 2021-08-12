$(function(){
   $('.navbar__menu').on('click', function () {
      $('.mobil-wrap').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
   $('.slider-hrac').slick({
      Infinity:true,
      arrows:false,
      slidesToShow: 5,
      autoplay: true,
      slidesToScroll:1,
      centerMode:true,
      variableWidth:true,
      responsive: [
         {
            breakpoint: 1640,
            settings: {
           slidesToShow: 4,
            }
          },
       {
         breakpoint: 480,
         settings: {
        slidesToShow: 1,
        centerMode:false,
        variableWidth: false,
         }
       },
     
      ]
    });
});