var slideRight = {
    delay:200,
    distance: '150%',
    origin: 'right',
    duration: 1500,
    opacity: null
};

var slideLeft = {
    delay:200,
    distance: '150%',
    origin: 'left',
    duration: 1500,
    opacity: null
};


var care = {
    delay:500,
    distance: '200%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var timeline = {
  delay:1000,
  opacity: 0
}

var passion = {
    delay:1000,
    distance: '1000%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var areas1 = {
    delay:1400,
    distance: '1000%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var areas2 = {
    delay:1800,
    distance: '1000%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var areas3 = {
    delay:2200,
    distance: '1000%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

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

//   jQuery(document).ready(function(){
//     $(window).scroll(function() {
//       if ($(window).scrollTop()>$('#content').offset().top-200){
//   	     jQuery('.skillbar').each(function(){
//   		       jQuery(this).find('.skillbar-bar').animate({
//   			          width:jQuery(this).attr('data-percent')
//                 },2000);
//   	 });
//     }
//   });
// });
