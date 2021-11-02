$(function(){
   $('.navbar__menu').on('click', function () {
      $('.mobil-wrap').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
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
