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

$(document).ready(function(){
  $('.burgers').on("click",function(){
    $(".menu li").toggleClass("open");
  });
});


particlesJS.load('background','particles.json',function(){
console.log('particles.json loaded...')
  });
