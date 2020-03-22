

// $(document).ready( function() {
//   $('.burgers').on("click",function(){
//     $('.menu li').toggleClass("open");
//   });
// });

var slideRight = {
    delay:200,
    distance: '25%',
    origin: 'right',
    duration: 1000,
    opacity: 0
};

var slideLeft = {
    delay:200,
    distance: '25%',
    origin: 'left',
    duration: 1000,
    opacity: 0
};


var care = {
    delay:500,
    distance: '100%',
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
    distance: '200%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var areas1 = {
    delay:1400,
    distance: '200%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var areas2 = {
    delay:1800,
    distance: '200%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var areas3 = {
    delay:2200,
    distance: '200%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};


if (window.innerWidth < 480){
  document.getElementById("e").className = "fas fa-envelope-open-text fa-2x";
  document.getElementById("l").className = "fab fa-linkedin fa-2x";
  document.getElementById("m").className = "fab fa-facebook-messenger fa-2x";

}

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
