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

  jQuery(document).ready(function(){
  	jQuery('.skillbar').each(function(){
  		jQuery(this).find('.skillbar-bar').animate({
  			width:jQuery(this).attr('data-percent')
  		},6000);
  	});
  });
