$(function(){
   $('.navbar__menu').on('click', function () {
      $('.mobil-wrap').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps, .aside__youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });
    // $('.infoblock__wrapper .tabulka__tab').on('click', function (event) {
    //   var id = $(this).attr('data-id');
    //   $('.infoblock__wrapper').find('.infoblock__tabulka-content').removeClass('tab-active').hide();
    //   $('.infoblock__wrapper .infoblock__header').find('.tabulka__tab').removeClass('active');
    //   $(this).addClass('active');
    //   $('#' + id)
    //     .addClass('tab-active')
    //     .fadeIn();
    //   return false;
    // });
    $('select, .shop__check').styler();
   $('.slider-hrac').slick({
     dots: false,
      Infinity:true,
      arrows:false,
      slidesToShow: 9,
      draggable: true,
      swipeToSlide: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
           slidesToShow: 7,
            }
          },
          {
            breakpoint: 991,
            settings: {
           slidesToShow: 5,
            }
          },
          {
            breakpoint: 750,
            settings: {
           slidesToShow: 3,
            }
          },
          {
            breakpoint: 570,
            settings: {
           slidesToShow: 1,
            }
          },
     
      ]
    });
    $('.partners__submain-slide').slick({
      Infinity:true,
      arrows:false,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll:1,
    });
    $('.partners__row').slick({
      Infinity:true,
      arrows:false,
      slidesToShow: 5,
      autoplay: true,
      slidesToScroll:1,
      responsive: [
        {
           breakpoint: 1241,
           settings: {
          slidesToShow: 5,
           }
         },
      {
        breakpoint: 841,
        settings: {
       slidesToShow: 3,
        }
      },
      {
        breakpoint: 481,
        settings: {
       slidesToShow: 2,
        }
      },
    
     ]
    });
});
var _gallery_loading = false;
$('a[data-gallery]').click(function () {
  if (_gallery_loading) return;
  _gallery_loading = true;

  var mode = $(this).data('gallery');
  var url = '/inc/gallery_ajax.asp?mode=' + mode;

  if (mode == 1 || mode == 2) {
    url += '&id=' + $(this).data('gallery-id');
  }

  $.getJSON(url, { format: 'json' })
    .done(function (e) {
      $(this).lightGallery({
        hash: false,
        share: false,
        dynamic: true,
        dynamicEl: e,
        download: false,
        backdropDuration: 500,
      });
    })
    .fail(function (e, textStatus, error) {
      alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
      console.error('getJSON failed, status: ' + textStatus + ', error: ' + error);
      console.error(e);
    })
    .always(function () {
      _gallery_loading = false;
    });

  return false;
});





//// 



var _gallery_loading = false;
$('a[data-gallery]').click(function () {
 if (_gallery_loading) return;
 _gallery_loading = true;

 var mode = $(this).data('gallery');
 var url = '/inc/gallery-ajax.php?mode=' + mode;

 if (mode == 1 || mode == 2) {
   url += '&id=' + $(this).data('gallery-id');
 }

 $.getJSON(url, { format: 'json' })
   .done(function (e) {
     $(this).lightGallery({
       hash: false,
       share: false,
       dynamic: true,
       dynamicEl: e,
       download: false,
       backdropDuration: 500,
     });
   })
   .fail(function () {
    alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
   })
   .always(function () {
     _gallery_loading = false;
   });

 return false;
});
//// scroll
window.addEventListener('scroll', function () {
 var header = document.querySelector('.header');
 header.classList.toggle('sticky', window.scrollY > 0);
});


