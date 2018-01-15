$(function() {

$('#demo').RollingSlider({
        showArea:"#example",
        prev:"#jprev",
        next:"#jnext",
        moveSpeed:300,
        autoPlay:false
      });



// Swiper
var swiper = new Swiper('#swiper-1', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 80
        },
      }
    });



var swiper = new Swiper('#swiper-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#next',
        prevEl: '#prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
	
 //Мобильная менюшка
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 350,
  'tolerance': 70,
});
document.querySelector('.menu-open').addEventListener('click', function() {
  slideout.open();
  $('body').addClass('on');
});
document.querySelector('.menu-close').addEventListener('click', function() {
  slideout.close();
  $('body').removeClass('on');
});

function close(eve) {
  eve.preventDefault();
  slideout.close();
}
    // Сайт затемняет
    slideout
      .on('beforeopen', function() {
        this.panel.classList.add('panel-open');
      })
      .on('open', function() {
        this.panel.addEventListener('click', close);
      })
      .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
      });
  
slideout.on('translatestart', function() {
  $('body').addClass('on');
});

slideout.on('close', function() { 
  $('body').removeClass('on');
});



// Якорь
 $(document).ready(function(){
    $("#link, #link-1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


// select
$('select').each(function(){
  $(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
  $(this).siblings('p').text( $(this).children('option:selected').text() );
});

// Сварачивающиеся блоки
$(".faq__block").click(function () {
  // $(this).toggleClass("active");
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).find($('p')).slideUp();
  } else
    active($(this));
});

function active(crr){
  $(".faq__block").removeClass('active');
  $(".faq__block p").slideUp();
  crr.addClass('active');
  crr.find($('p')).slideDown();
}

var scene = $('.scene').get(0);
var parallaxInstance = new Parallax(scene);
var scene = $('.scene1').get(0);
var parallaxInstance = new Parallax(scene);
var scene = $('.scene2').get(0);
var parallaxInstance = new Parallax(scene);

});


