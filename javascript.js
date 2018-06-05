$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false,
  });
});


particlesJS.load('background','particles.json',function(){
console.log('particles.json loaded...')
  });
