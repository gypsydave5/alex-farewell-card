$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    $('.message-container').addClass("sticky");
    $('#about').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('.message-container').removeClass("sticky");
    $('#about').removeClass("sticky");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    $('#message').addClass('sticky');
  }
  else{
    $('header').removeClass('sticky');
    
  }
});
