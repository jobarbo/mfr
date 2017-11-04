var $elementName,highlited,finished,toggled;
$('.hamburger').click(function(){
  if(toggled != true){
    toggled=true;
    $('.menu_text').text('Fermer');
  }else{
    toggled=false;
    $('.menu_text').text('Menu');
  }
  $('.menu').toggleClass('activated');
  
});

$('.anchor').click(function(){
  $('.menu').toggleClass('activated');
  toggled=false;
  $('.menu_text').text('Menu');
  $elementName = event.target.name;
  $('body').animate({
    fade:  $(".wrapper").children(':not(#' + $elementName+')').addClass('faded'),
    scrollTop: $('#' + $elementName).offset().top
  },'1000', function() {
    $('#'+$elementName).toggleClass('highlite');
    setTimeout(setHighlite,500);
  });
});

var setHighlite = function(){
  highlited = true;
};

$(window).on('scroll',function(){
  if( highlited == true ){
    highlited = false;
    $('#'+$elementName).toggleClass('highlite');
    $(".wrapper").children(':not(#' + $elementName+')').removeClass('faded');
  }
});

