$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    $('.message-container').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('.message-container').removeClass("sticky");
  }
});