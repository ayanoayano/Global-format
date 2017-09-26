// JavaScript Document

$('.anim-fadeinl').css('visibility','hidden');
$('.anim-fadeinr').css('visibility','hidden');

$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.anim-fadeinl').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInLeft");
  }
 });
  $('.anim-fadeinr').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInRight");
  }
 });
});
