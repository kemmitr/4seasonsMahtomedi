$(function(){
// Scroll Button Code
   $('.js--scroll-to-plans').click(function (){
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
   });
   $('.js--scroll-to-meals').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-meals').offset().top}, 1000);
   });
  $('.js--scroll-to-steps').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
   });
  $('.js--scroll-to-cities').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
   });
  $('.js--scroll-to-form').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
  });

//Scroll Animation Code
  $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1').addClass('animated tada');
  }, {
    offset: '50%',
  }); 

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '65%',
  }); 

  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated pulse');
  }, {
    offset: '50%',
  }); 

  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated flipInX');
  }, {
    offset: '50%',
  });
});