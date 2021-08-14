$(function(){
   $('.navbar__menu').on('click', function () {
      $('.mobil-wrap').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
    
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